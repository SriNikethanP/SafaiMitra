import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connection to Database ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};