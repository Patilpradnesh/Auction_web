const  mongoose = require('mongoose');

const  URL = 'mongodb://localhost:27017/?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000'



const connectDB = async () => {
  try {
        await mongoose.connect(URL)
        console.log("Successfully connected to database")
    } catch (error) {
        console.log("MongoDb connection fails:" , error.message)
    }
};

module.exports = connectDB;
