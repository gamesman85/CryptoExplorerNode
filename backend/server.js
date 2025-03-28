const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const cryptoRoutes = require('./src/routes/cryptoRoutes');

app.use(cors());
app.use(express.json());

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