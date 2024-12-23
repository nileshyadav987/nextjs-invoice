import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/library/mongoose";
import { getBusinessDetailsFromToken, getUserDetailsFromToken } from "@/library/utilities";
import Invoice from "@/models/invoiceModel";
import moment from "moment";

export async function GET(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    const businessMainData = await getBusinessDetailsFromToken(req);
    // console.log('userMainData-------------------------------->', typeof userMainData, userMainData);
    await connectToDatabase();
    const invoices = await Invoice.find({
      business: businessMainData?._id
    });
    const formattedInvoices = invoices.map((v) => ({
      ...v.toObject(), // Convert Mongoose document to plain object
      createdAt: moment(v.createdAt).format("YYYY-MM-DD HH:mm"), // Format the date
      dueAt: moment().format("YYYY-MM-DD HH:mm"), // Format the date
    }));
    return NextResponse.json({ mylist: formattedInvoices }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
