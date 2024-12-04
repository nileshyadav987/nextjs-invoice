// src/app/api/test/route.ts
import { connectToDatabase } from "@/library/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  return NextResponse.json({ message: "Test API route" });
}
