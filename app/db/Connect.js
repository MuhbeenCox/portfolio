import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("CONNECTED TO MONGODB SUCCESSFULLY");
    } catch (error) {
      console.error("Connection to MongoDB failed:", error.message);
      process.exit(1);
    }
  }
};

export default ConnectDB;
