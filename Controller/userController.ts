import { Request, Response } from "express";
import userModel from "../Model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, regNum } = req.body;

    const user = await userModel.create({
      name,
      email,
      regNum,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "User not found",
      data: error.message,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "viewing all users",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findByIdAndDelete(userID);

    return res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};