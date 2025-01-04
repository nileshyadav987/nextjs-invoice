import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";
import Invoice from "@/models/invoiceModel";
import moment from "moment";
import Client from "@/models/clientModel";

export async function GET(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    const businessMainData = await getBusinessDetailsFromToken(req);
    // console.log('userMainData-------------------------------->', typeof userMainData, userMainData);
    await connectToDatabase();
    const clients = await Client.find({
      business: businessMainData?._id
    }).sort({createdAt: -1});
    
    return NextResponse.json({ clients: clients }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
