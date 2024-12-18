import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";
import Invoice from "@/models/invoiceModel";

export async function GET(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    const businessMainData = await getBusinessDetailsFromToken(req);
    // console.log('userMainData-------------------------------->', typeof userMainData, userMainData);
    await connectToDatabase();
    const mylist = await Invoice.find({
      business: businessMainData?._id
    });
    return NextResponse.json({ mylist }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
