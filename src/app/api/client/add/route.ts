import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";
import Client from "@/models/clientModel";

export async function POST(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    const businessMainData = await getBusinessDetailsFromToken(req);
    // console.log('userMainData-------------------------------->', typeof userMainData, userMainData);
    await connectToDatabase();
    const input = await req.json();
    
    let client = new Client({
      name: input.name,
      email: input.email || "",
      mobile: input.mobile || "",
      address: input.address || "",
      business: businessMainData._id
    });

    await client.save();
    return NextResponse.json({ client }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
