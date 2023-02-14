import { Router } from "express";

import { ProductController } from "./controllers/ProductController";
import { ProductCategoryController } from "./controllers/ProductCategoryController";

const router = Router();

const product = new ProductController();
const productCategory = new ProductCategoryController();

router.post('/product/create', product.save);
router.post('/product/find-by-id/:id', product.findById);

router.post('/product-category/create', productCategory.save);

export { router }


