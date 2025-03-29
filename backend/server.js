const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const cryptoRoutes = require('./src/routes/cryptoRoutes');

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://crypto-explorer-frontend.fly.dev' 
    : 'http://localhost:8080',
  optionsSuccessStatus: 200
};

app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Crypto Explorer Backend',
    status: 'active',
    endpoints: ['/api/crypto', '/health']
  });
});

// Routes
app.use('/api', cryptoRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(port, () => {
  console.log(`Crypto server running at http://localhost:${port}`);
});