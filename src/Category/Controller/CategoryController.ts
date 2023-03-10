import { Request, Response } from "express";
import { CategoryApplication } from "../Application/CategoryApplication";
import { InputCategoryStore } from "../Application/Input/InputCategoryStore";

export class CategoryController {

    private categoryApplication: CategoryApplication;

    constructor() {
        this.categoryApplication = new CategoryApplication();
    }
    
    public storeAction = async (req: Request, res: Response) => {
        const { name } = req.body;
        
        const output = await this.categoryApplication.save(
            new InputCategoryStore(
                name
            )
        );

        return res.status(201).json(output.getOutput());
    }

}
