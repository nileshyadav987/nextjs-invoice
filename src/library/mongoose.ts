import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    isConnected = db.connections[0].readyState === 1; // 1 = connected
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", (error as Error).message);
    throw new Error("Database connection failed.");
  }
};
