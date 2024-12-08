import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import Business from "@/models/businessModel";
import { getUserDetailsFromToken } from "@/library/utilities";
import mongoose from "mongoose";
import { generateToken } from "@/library/jwt";

export async function POST(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    if (!userMainData || typeof userMainData._id !== "string") {
      throw new Error("Invalid or missing user data");
    }
    console.log(
      "userMainData-------------------------------->",
      typeof userMainData,
      userMainData
    );
    await connectToDatabase();
    const input = await req.json();
    const business = await Business.findOne({
      _id: input.businessId,
      "users.userId": mongoose.Types.ObjectId.createFromHexString(
        userMainData._id
      ),
    });
    if (business) {
      const clone = business.toJSON();
      clone.users = clone.users.filter(
        (v: { userId: any }) => v.userId == userMainData._id
      );
      const token = generateToken(clone);
      const response = NextResponse.json({}, { status: 200 });
      response.cookies.set("x-business-token", token);
      return response;
    } else {
      throw "Access denied";
    }
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 400 });
  }
}
