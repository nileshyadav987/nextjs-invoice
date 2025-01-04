// src/models/userModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IClient extends Document {
  name: string;
  email: string;
  mobile: string;
  business: mongoose.Types.ObjectId;
}

const clientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    address: {
      type: String,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
  },
  { timestamps: true }
);

const Client =
  mongoose.models.Client || mongoose.model<IClient>("Client", clientSchema);

export default Client;
