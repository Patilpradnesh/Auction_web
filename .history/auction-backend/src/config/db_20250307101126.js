const  mongoose = require('mongoose');

const  URL = 'mongodb+srv://patilpradnesh4124:patil4124@cluster0.njmlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONO ,{
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
