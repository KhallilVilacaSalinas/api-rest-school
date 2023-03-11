import { compare } from "bcryptjs";
import { Auth } from "../Entity/Auth";
import { User } from "../Entity/User";
import { UserService } from "./UserService";
import { sign } from "jsonwebtoken";

export class AuthService {
    
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }
    
    public async auth(user: User): Promise<string> {
        user.userValidate();

        const userAlreadyExists: User = await this.userService.getUserByUsername(user);

        if (!userAlreadyExists.getUsername) {
            throw new Error('User or password incorrect');
        }

        const password = await compare(user.getPassword, userAlreadyExists.getPassword);

        if (!password) {
            throw new Error('User or password incorrect');
        }

        const token = sign({}, process.env.APP_SECRET as string, {
            subject: userAlreadyExists.getId.getId ?? undefined,
            expiresIn: "6h"
        });

        console.log(token);
        

        return Promise.resolve(token)
    }
}