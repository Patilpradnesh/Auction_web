const  mongoose = require('mongoose');
const dotenv = require('dotenv')
require('dotenv)

const mongoURI = process.env.MONGO_URI


if (!mongoURI) {
  console.error("Error: MongoDB URI is undefined. Check your .env file.");
  process.exit(1); // Exit the application if the URI is missing
}


const connectDB = async () => {
  try {
        await mongoose.connect(mongoURI,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
        })
        console.log("Successfully connected to database")
    } catch (error) {
        console.log("MongoDb connection fails:" , error.message)
    }
};

module.exports = connectDB;
