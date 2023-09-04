import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URI: string = process.env.MONGO_URI || "";

export default async function createDatabase() {
  const db = await mongoose.connect(MONGO_URI);
  return db;
}
