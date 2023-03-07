import { Router } from "express";
import { UserController } from "../Controller/UserController";
import { AuthController } from "../Controller/AuthController";

const systemRouter = Router();

const user = new UserController();
const auth = new AuthController();


systemRouter.post('/api/user/create', user.storeAction);
systemRouter.post('/api/auth', auth.authAction);

export { systemRouter };