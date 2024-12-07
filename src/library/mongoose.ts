import mongoose from "mongoose";

let isConnected = false;  // Track connection status

export const connectToDatabase = async (): Promise<typeof mongoose> => {
  if (isConnected) {
    console.log("Reusing the existing MongoDB connection.");
    return mongoose;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    isConnected = db.connections[0].readyState === 1; // 1 = connected
    console.log("Connected to MongoDB.");
    return mongoose;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
