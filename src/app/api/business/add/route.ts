import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import Business from "@/models/businessModel";
import { getUserDetailsFromToken } from "@/library/utilities";

export async function POST(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    console.log('userMainData-------------------------------->', typeof userMainData, userMainData);
    await connectToDatabase();
    const input = await req.json();
    const business = new Business({
      name: input.name,
      address: input.address,
      createdBy: userMainData?._id,
      users: [{userId: userMainData?._id, role: "admin"}]
    });
    await business.save();
    return NextResponse.json({ business }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
