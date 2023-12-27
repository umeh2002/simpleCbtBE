import { Schema, model } from "mongoose";
import { iUserData } from "../utils/interface";

const UserModel = new Schema<iUserData>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      toLowerCase: true,
    },
    regNum: {
      type: String,
      required: true,

    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", UserModel);
