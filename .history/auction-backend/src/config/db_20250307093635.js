const {default : mongoose} = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
