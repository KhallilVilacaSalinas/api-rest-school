import { Router } from "express";
import { CategoryController } from "../Controller/CategoryController";
import { ensureAuthenticated } from "../../../Kernel/middleware/ensureAuthenticated";

const categoryRouter = Router();

const category = new CategoryController();

categoryRouter.post('/api/category/create', ensureAuthenticated, category.storeAction);

export { categoryRouter };
