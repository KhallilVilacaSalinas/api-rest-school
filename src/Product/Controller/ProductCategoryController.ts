import { Request, Response } from "express";
import { prismaClient } from "../../../Kernel/database/prismaClient";

export class ProductCategoryController {
    async save(req: Request, res: Response) {
        const { bar_code, name, price, id_category } = req.body;
        
        const product = await prismaClient.productCategory.create({
            data: {
                product: {
                    create: {
                        bar_code,
                        name,
                        price
                    }
                },
                category: {
                    connect: {
                        id: id_category
                    }
                }
            }
        });

        console.log(product);

        return res.json(product);
    }
}
