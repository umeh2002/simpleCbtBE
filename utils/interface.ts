import { Document } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  regNum: number;
}



export interface iQuestion {
  questionText: string;
  options: Array<string>;
  idNum: number;
  answer: string;
}

export interface iUserData extends iUser, Document {}
export interface iQuestionData extends iQuestion, Document {}
