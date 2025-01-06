import { NextRequest, NextResponse } from "next/server";
import {
  getBusinessDetailsFromToken,
  getUserDetailsFromToken,
} from "@/library/utilities";
import Invoice from "@/models/invoiceModel";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const invoiceId = (await params).id;

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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();

    const invoiceId = (await params).id;

    if (!invoiceId) {
      return NextResponse.json(
        { error: "Invoice ID is required" },
        { status: 400 }
      );
    }

    // Retrieve business details from the token
    const businessMainData = await getBusinessDetailsFromToken(req);

    // Find the invoice by ID
    const invoice = await Invoice.findOneAndUpdate(
      { _id: invoiceId, business: businessMainData._id },
      body,
      { new: true }
    );

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
