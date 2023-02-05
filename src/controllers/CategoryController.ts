import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CategoryController {
    async save(req: Request, res: Response) {
        const { name } =  req.body;
        
        const category = await prismaClient.category.create({
            data: {
                name,
            },
        });

        return res.json(category);
    }
}
