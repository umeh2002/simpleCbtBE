import { Schema, Types, model } from "mongoose";
import { iQuestionData } from "../utils/interface";

const questionModel = new Schema<iQuestionData>(
  {
    idNum: {
      type: Number,
    },
    questionText: {
      type: String,
    },
    answer: {
      type: String,
    },
    options: [
      {
        type: Array<String>,
      },
    ],
  },

  { timestamps: true }
);

export default model<iQuestionData>("questions", questionModel);
