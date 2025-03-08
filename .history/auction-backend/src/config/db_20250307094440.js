const  mongoose = require('mongoose');

const  URL = 'mongodb://localhost:27017/?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000'



const connectDB = async () => {
  try {
    const connect = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(connect)
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
   
  }
};

module.exports = connectDB;
