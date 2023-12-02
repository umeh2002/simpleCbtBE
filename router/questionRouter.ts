import { Router } from "express";
import {
  answerQuestion,
  createQuestion,
  deleteOneQuestion,
  getAllQuestions,
  getOneQuestion,
} from "../Controller/questionController";

const questionRouter = Router();

questionRouter.route("/create-question").post(createQuestion);
questionRouter.route("/get-questions").get(getAllQuestions);
questionRouter.route("/:questionID/get-one-question").get(getOneQuestion);
questionRouter.route("/:questionID/answer-question").get(answerQuestion);
questionRouter
  .route("/:questionID/delete-one-question")
  .delete(deleteOneQuestion);

export default questionRouter;
