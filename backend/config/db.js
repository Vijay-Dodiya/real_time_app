const mongoose = require("mongoose");
const color = require("colors");
const connectDB = async () => {
  try {
    const connectToDb = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${connectToDb.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
