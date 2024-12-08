import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/userModel";
import { generateToken } from "@/library/jwt";
import Business from "@/models/businessModel";
import mongoose from "mongoose";
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const input = await req.json();
    console.log("data--", input);
    const userData = await User.findOne({
      email: input.email
    });
    const isValid = await userData.isValidPassword(input.password);
    if(!isValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }
    // Generate a JWT token
    const user = userData.toJSON();
    delete user.password;
    const token = generateToken(user);
    console.log("data user ----------------------", user);
    return NextResponse.json({ token, user }, { status: 200 });
  } catch(e) {
    console.error('err33------->', e);
    return NextResponse.json({}, { status: 500 });
  }
}
