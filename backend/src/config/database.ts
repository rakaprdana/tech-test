import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("DB has been connected");
  } catch (error) {
    console.error("Connection failed: ", error);
    process.exit(1);
  }
}
