import { Router } from "express";
import { CategoryController } from "../Controller/CategoryController";
import { AuthController } from "../../SystemUser/Controller/AuthController";

const categoryRouter = Router();

const category = new CategoryController();

categoryRouter.post('/api/category/create', category.storeAction);

export { categoryRouter };