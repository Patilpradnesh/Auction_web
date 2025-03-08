const  mongoose = require('mongoose');
const dotenv = re


const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONGO_URL ,{
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
