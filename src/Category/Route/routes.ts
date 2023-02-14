import { Router } from "express";
import { CategoryController } from "../Controller/CategoryController";

const categoryRouter = Router();

const category = new CategoryController();

categoryRouter.post('/category/create', category.storeAction);

export { categoryRouter };