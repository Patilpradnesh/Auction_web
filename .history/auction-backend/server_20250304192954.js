const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const auctionRoutes = require('./routes/auctionRoutes');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auctions', auctionRoutes);

// 404 error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {