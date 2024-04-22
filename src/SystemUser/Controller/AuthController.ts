import { Request, Response } from "express";
import { AuthApplication } from "../Application/AuthApplication";
import { InputAuth } from "../Application/Input/InputAuth";


export class AuthController {
    
    private authApplication: AuthApplication
    
    constructor() {
        this.authApplication = new AuthApplication();
    }

    public authAction = async (req: Request, res: Response) => {
        const { username, password } = req.body

        const output = await this.authApplication.auth(
            new InputAuth(
                username,
                password
            )
        )

        return res.json(output.getOutput());
    }
}
