import { Router } from "express";
import { CategoryController } from "../Controller/CategoryController";

const categoryRouter = Router();

const category = new CategoryController();

console.log('wfw');

categoryRouter.post('/category/create', category.save);

export { categoryRouter };