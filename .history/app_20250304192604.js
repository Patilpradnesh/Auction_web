const mongoose = require('mongoose');
const config = require('./config');

// ...existing code...

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// ...existing code...
