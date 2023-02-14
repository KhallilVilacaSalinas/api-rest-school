import { Request, Response } from "express";
import { CategoryApplication } from "../Application/CategoryApplication";
import { InputCategoryStore } from "../Application/Input/InputCategoryStore";

export class CategoryController {

    private categoryApplication: CategoryApplication;

    constructor() {
        this.categoryApplication = new CategoryApplication();
    }

    public async storeAction(req: Request, res: Response) {
        const { name } = req.body;
  
        const output = this.categoryApplication.save(
            new InputCategoryStore(
                name
            )
        );

        return res.json(output);
    }

    private getInstance(): CategoryApplication {
        return new CategoryApplication();
    }
}
