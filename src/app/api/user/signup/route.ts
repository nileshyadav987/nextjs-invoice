import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/userModel";
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const input = await req.json();
    console.log("data--", input);
    const user = new User({
      email: input.email,
      password: input.password,
    });
    await user.save();
    return NextResponse.json({ user }, { status: 200 });
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}
