import { Request, Response } from "express";
import { UserApplication } from "../Application/UserApplication";
import { InputUserStore } from "../Application/Input/InputUserStore";
import { Success } from "../../../Kernel/http/Success";


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

        const success = new Success(output.getOutput());

        return res.status(201).json(success.render());
    }
}
