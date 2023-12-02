import { Router } from "express";
import { createUser, getOne, getUsers } from "../Controller/userController";

const userRouter = Router();

userRouter.route("/create-user").post(createUser);
userRouter.route("/get-users").get(getUsers);
userRouter.route("/:userID/get-one-user").get(getOne);

export default userRouter;
