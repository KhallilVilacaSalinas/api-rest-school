import { Request, Response } from "express";
import { prismaClient } from "../../../Kernel/database/prismaClient";

export class CategoryController {
    async save(req: Request, res: Response) {
        console.log('controller');
        
        const { name } = req.body;
        
        const category = await prismaClient.category.create({
            data: {
                name,
            },
        });

        return res.json(category);
    }
}
