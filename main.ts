import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./router/userRouter";
import questionRouter from "./router/questionRouter";

const main = (app: Application) => {
  app.use(express.json());
  app.use(cors());

  app.use(morgan("dev"));
  app.use(helmet());

  app.use("/api", userRouter);
  app.use("/api", questionRouter);

  app.get("/", async (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Success",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error",
        data: error.message,
      });
    }
  });
};

export default main;
