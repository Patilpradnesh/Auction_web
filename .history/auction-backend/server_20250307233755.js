const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const auctionRoutes = require('./src/routes/auctionRoutes');
const bidRoutes = require("./routes/bidRoutes");

// Load environment variables
require("dotenv").config(); // Load environment variables from .env file

// Connect to the database
connectDB();

const app = express();
app.use(express.json());

app.use("/api", bidRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auctions', auctionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
