const mongoose = require('mongoose');//library
const config = require('config');//module
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mu, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
