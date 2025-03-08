const {default : mongoose} = require('mongoose');
const dotenv = require('dotenv');
const  URL = 'mongodb://localhost:27017/?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000'

dotenv.config();
console.log(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(UR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
