import { NextRequest, NextResponse } from "next/server";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";

export async function GET(req: NextRequest) {
  try {
    const businessMainData = await getBusinessDetailsFromToken(req);
    return NextResponse.json({ business: businessMainData }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 400 });
  }
}
