const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    /*
    The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.If the Promise is rejected, the await expression throws the rejected value.
    */
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
