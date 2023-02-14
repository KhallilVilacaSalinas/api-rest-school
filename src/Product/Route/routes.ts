import { Router } from "express";
import { ProductController } from "../Controller/ProductController";
import { ProductCategoryController } from "../Controller/ProductCategoryController";

const productRouter = Router();

const product = new ProductController();
const productCategory = new ProductCategoryController();

productRouter.post('/product/create', product.save);
productRouter.post('/product/find-by-id/:id', product.findById);

productRouter.post('/product-category/create', productCategory.save);

export { productRouter }
