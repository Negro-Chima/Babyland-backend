const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
//
//
// chimannabuike23
// GhjBqHspZAiIpXdX
// mongodb+srv://chimannabuike23:GhjBqHspZAiIpXdX@cluster0.jkxvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
