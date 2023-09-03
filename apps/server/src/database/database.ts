import mongoose from "mongoose";
import "dotenv/config";

export default async function createDatabase() {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return db;
}
