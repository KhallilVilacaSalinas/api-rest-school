import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const router = Router();

const product = new ProductController();

console.log('routes');


router.post('/products', product.handle)
router.get('/', product.oi)

export { router }


