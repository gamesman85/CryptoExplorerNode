FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Set the API URL for production
ENV VITE_API_URL=https://crypto-explorer-backend.fly.dev/api

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install http-server
RUN npm install -g http-server

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 8080

# Start http-server
CMD ["http-server", "dist", "-p", "8080"]