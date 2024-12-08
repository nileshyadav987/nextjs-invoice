import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import User from "@/models/userModel";
import { generateToken } from "@/library/jwt";
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
    const {password, ...clone} = user.toJSON();
    const token = generateToken(clone);
    const response = NextResponse.json({ token, user: clone }, { status: 200 });
    response.cookies.set('x-access-token', token);
    return response;
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}
