// src/app/api/test/route.ts
import { connectToDatabase } from "@/library/mongoose";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const userMainData = getUserDetailsFromToken(req);
  const businessMainData = getBusinessDetailsFromToken(req);
  return NextResponse.json({ userMainData, businessMainData, message: "Test API route" });
}
