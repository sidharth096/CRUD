import mongoose from "mongoose";
import configKey from "./configKey.js";

if (!configKey.MONGO_URI) {
    throw new Error("MONGO_URL is not provided in .env file");
}

async function connectDB() {
    try {
        await mongoose.connect(configKey.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB