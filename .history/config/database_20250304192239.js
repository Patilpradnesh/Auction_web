const mongoose = require('mongoose');
const config = require('config');

// Retrieve the connection string from the configuration
const dbURI = config.get('mongoURI');

if (!dbURI) {
  throw new Error('MongoDB connection string is not defined');
}

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));
