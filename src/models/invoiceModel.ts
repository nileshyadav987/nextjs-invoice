
import mongoose, { Document, Schema } from "mongoose";

export interface IInvoice extends Document {
  items: {
    description: string;
    qty: number;
    rate: number;
    price: number;
  }[];
  subtotal: number;
  total: number;
  autoNumber: number;
  business: mongoose.Types.ObjectId; // Refers to the associated business
  createdBy: mongoose.Types.ObjectId; // Refers to the user who created the invoice
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  client?: {
    _id: { type: mongoose.Types.ObjectId };
    name: { type: String };
    email: { type: String };
    mobile: { type: String };
    address: { type: String };
  };
}

const invoiceSchema: Schema = new Schema(
  {
    items: [
      {
        description: { type: String, required: true },
        qty: { type: Number, required: true },
        rate: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    totalPaid: { type: Number, default: 0 },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: String, required: true, default: "draft" },
    autoNumber: { type: Number, required: true },
    dueAt: { type: Date },
    client: {
      _id: { type: String },
      name: { type: String },
      email: { type: String },
      mobile: { type: String },
      address: { type: String },
    },
  },
  { timestamps: true }
);

const Invoice =
  mongoose.models.Invoice || mongoose.model<IInvoice>("Invoice", invoiceSchema);

export default Invoice;
