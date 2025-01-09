import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import Business from "@/models/businessModel";
import { getUserDetailsFromToken } from "@/library/utilities";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    if (!userMainData || typeof userMainData._id !== "string") {
      throw new Error("Invalid or missing user data");
    }
    await connectToDatabase();
    
    const list = await Business.find({
      "users.userId": mongoose.Types.ObjectId.createFromHexString(
        userMainData._id
      ),
    });
    if (list) {
      return NextResponse.json({list}, { status: 200 });
    } else {
      throw "Access denied";
    }
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 400 });
  }
}
