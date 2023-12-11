import { Schema, Types, model } from "mongoose";
import { iQuestionData } from "../utils/interface";

const questionModel = new Schema<iQuestionData>(
  {
    questionText: {
      type: String,
    },
    answer: {
      type: String,
    },
    a: {
      type: String,
      required: true,
    },
    b: {
      type: String,
      required: true,
    },
    c: {
      type: String,
      required: true,
    },
    d: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default model<iQuestionData>("questions", questionModel);
