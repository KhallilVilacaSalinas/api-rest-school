import { Request, Response } from "express";
import { UserApplication } from "../Application/UserApplication";


export class UserController {
    
    private userApplication: UserApplication
    
    constructor() {
        this.userApplication = new UserApplication();
    }

    public storeAction = async (req: Request, res: Response) => {
        const { name, username, password } = req.body

        const output = await this.userApplication.save(
            
        )
    }
}