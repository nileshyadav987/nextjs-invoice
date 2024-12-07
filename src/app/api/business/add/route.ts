import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import Business from "@/models/businessModel";
export async function POST(req: NextRequest) {
  try {
    const cookie = req.cookies.get('user-data');
    console.log('cookie-------------------------------->', cookie);
    await connectToDatabase();
    return NextResponse.json({  }, { status: 200 });
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}
