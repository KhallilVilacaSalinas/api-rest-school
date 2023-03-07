import { Request, Response } from "express";
import { UserApplication } from "../Application/UserApplication";
import { InputUserStore } from "../Application/Input/InputUserStore";


export class UserController {
    
    private userApplication: UserApplication
    
    constructor() {
        this.userApplication = new UserApplication();
    }

    public storeAction = async (req: Request, res: Response) => {
        const { id, name, username, password } = req.body

        const output = await this.userApplication.save(
            new InputUserStore(
                id,
                name,
                username,
                password
            )
        )

        return res.json(output.getOutput());

    }
}