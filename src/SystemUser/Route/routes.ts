import { Router } from "express";

const categoryRouter = Router();

const category = new ();

categoryRouter.post('/category/create', category.storeAction);

export { categoryRouter };