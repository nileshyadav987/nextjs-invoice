// src/models/userModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  logo: string;
  password: string;
}

const profileSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.models.Profile || mongoose.model<IUser>("User", profileSchema);

export default Profile;
