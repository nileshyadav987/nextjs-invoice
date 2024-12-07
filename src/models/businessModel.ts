import mongoose, { Document, Schema } from "mongoose";

export interface IBusiness extends Document {
  name: string;
  address: string;
  createdBy: mongoose.Types.ObjectId; // Refers to the user who created the business
  users: {
    userId: mongoose.Types.ObjectId;
    role: "view" | "edit";
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const businessSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    users: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        role: { type: String, enum: ["view", "edit"], required: true },
      },
    ],
  },
  { timestamps: true }
);

const Business = mongoose.models.Business || mongoose.model<IBusiness>("Business", businessSchema);

export default Business;
