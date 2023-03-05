import { Router } from "express";
import { UserController } from "../Controller/UserController";

const userRouter = Router();

const user = new UserController();

userRouter.post('/user/create', user.storeAction);

export { userRouter };