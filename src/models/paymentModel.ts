// src/models/userModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IPayment extends Document {
  paidAt: string;
  message: string;
  amount: string;
  invoiceId: mongoose.Types.ObjectId;
  business: mongoose.Types.ObjectId;
  client: {
    _id: { type: mongoose.Types.ObjectId };
    name: { type: string };
    email: { type: string };
    mobile: { type: string };
    address: { type: string };
  };
}

const paymentSchema: Schema = new Schema(
  {
    client: {
      _id: { type: String },
      name: { type: String },
      email: { type: String },
      mobile: { type: String },
      address: { type: String },
    },
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },
    amount: {
      type: Number,
    },
    message: {
      type: String,
    },
    paidAt: {
      type: Date,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
  },
  { timestamps: true }
);

const Payment =
  mongoose.models.Client || mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
