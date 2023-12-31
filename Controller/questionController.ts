import { Request, Response } from "express";
import questionModel from "../Model/questionModel";
import userModel from "../Model/userModel";

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { a, b, c, d, questionText, answer } = req.body;
    const questions = await questionModel.create({
      a,
      b,
      c,
      d,
      questionText,
      answer,
    });
    return res.status(201).json({
      message: "Question created successfully",
      data: questions,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await questionModel.find();

    return res.status(200).json({
      message: "success",
      data: questions,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const getOneQuestion = async (req: Request, res: Response) => {
  try {
    const { questionID } = req.params;
    const questions = await questionModel.findById(questionID);

    return res.status(200).json({
      message: "success",
      data: questions,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const deleteOneQuestion = async (req: Request, res: Response) => {
  try {
    const { questionID } = req.params;
    const questions = await questionModel.findByIdAndDelete(questionID);

    return res.status(200).json({
      message: "success",
      data: questions,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const answerQuestion = async (req: Request, res: Response) => {
  try {
    const { userID, questionID } = req.params;
    const { pick } = req.body;

    const user = await userModel.findById(userID);
    const questions = await questionModel.findById(questionID);

    console.log(questions)

    if (questions && user) {
      if (pick === questions.answer) {
        user.totalScore += 10
      await user.save()
        return res.status(200).json({
          message: "answer selected is correct",
          data:user.totalScore
        });
      } else {
        return res.status(404).json({
          message: "answer selected is not correct",
        });
      }
    } else {
      return res.status(404).json({
        message: "error",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};
