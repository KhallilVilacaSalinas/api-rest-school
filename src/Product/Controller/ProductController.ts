import { Request, Response } from "express";
import { prismaClient } from "../../../Kernel/database/prismaClient";

export class ProductController {
    async save(req: Request, res: Response) {
        const { name, bar_code, price } = req.body;
        
        const product = await prismaClient.product.create({
            data: {
                name,
                bar_code,
                price
            }
        });

        console.log(product);

        return res.json(product);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const product = await prismaClient.product.findFirst({
            where: {
                id
            }
        })

        return res.json(product)
    }
}
