FROM node:18-alpine

WORKDIR /app

# Install http-server globally
RUN npm install -g http-server

# Copy the pre-built app (you'll run npm run build locally)
COPY dist ./dist

# Expose port 8080
EXPOSE 8080

# Start http-server
CMD ["http-server", "dist", "-p", "8080"]
