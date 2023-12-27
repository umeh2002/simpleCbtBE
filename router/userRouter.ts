import { Router } from "express";
import { createUser, deleteOne, getOne, getUsers } from "../Controller/userController";

const userRouter = Router();

userRouter.route("/create-user").post(createUser);
userRouter.route("/get-users").get(getUsers);
userRouter.route("/:userID/get-one-user").get(getOne);
userRouter.route("/:userID/delete-one-user").delete(deleteOne);

export default userRouter;
