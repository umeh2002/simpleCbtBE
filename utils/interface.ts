import { Document } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  regNum: string;
}

export interface iQuestion {
  questionText: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: string;
}

export interface iUserData extends iUser, Document {}
export interface iQuestionData extends iQuestion, Document {}
