import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const router = Router();

const product = new ProductController();

router.post('/products', product.handle)

export { router }


