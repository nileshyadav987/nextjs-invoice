import { NextRequest, NextResponse } from "next/server";
import {
  getBusinessDetailsFromToken,
  getUserDetailsFromToken,
} from "@/library/utilities";
import Invoice from "@/models/invoiceModel";
import { connectToDatabase } from "@/library/mongoose";

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters
    const url = new URL(req.url);
    const invoiceId = url.searchParams.get("id");

    if (!invoiceId) {
      return NextResponse.json(
        { error: "Invoice ID is required" },
        { status: 400 }
      );
    }

    // Retrieve business details from the token
    const businessMainData = await getBusinessDetailsFromToken(req);

    // Find the invoice by ID
    const invoice = await Invoice.findOne({
      _id: invoiceId,
      business: businessMainData._id,
    });

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    // Respond with the invoice and business details
    return NextResponse.json({ invoice }, { status: 200 });
  } catch (e) {
    console.error("Error retrieving invoice:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const userMainData = await getUserDetailsFromToken(req);
    const businessMainData = await getBusinessDetailsFromToken(req);

    await connectToDatabase();
    const input = await req.json();

    let updatedItems = [...input.items];
    updatedItems = updatedItems.map((item) => {
      const qty = Number(item.qty || 0);
      const rate = Number(item.rate || 0);
      return { ...item, qty, rate, price: qty * rate };
    });
    // Recalculate the total amount dynamically
    const totalAmount = updatedItems.reduce((sum, item) => {
      const qty = Number(item.qty || 0);
      const rate = Number(item.rate || 0);
      return sum + qty * rate;
    }, 0);

    let invoice;
    if (input._id) {
      invoice = await Invoice.findById(input._id);
      if (!invoice) {
        throw new Error("Invoice ID not found.");
      }
      invoice.items = updatedItems;
      invoice.subtotal = totalAmount;
      invoice.total = totalAmount;
      invoice.client = input.client;
    } else {
      invoice = new Invoice({
        items: updatedItems,
        business: businessMainData._id,
        createdBy: userMainData._id,
        subtotal: totalAmount,
        total: totalAmount,
        client: input.client,
        totalPaid: 0,
      });
    }

    await invoice.save();
    return NextResponse.json({ invoice }, { status: 200 });
  } catch (e) {
    console.error("e--------->", e);
    return NextResponse.json({}, { status: 500 });
  }
}
