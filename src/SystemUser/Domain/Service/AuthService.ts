import { compare } from "bcryptjs";
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

        const currentUser: User = await this.userService.getUserByUsername(user);

        await this.compareAuthentication(user, currentUser);

        return this.generateToken(currentUser);
    }

    private async compareAuthentication(user: User, currentUser: User): Promise<boolean> {
        const passwordMatch = await compare(user.getPassword, currentUser.getPassword);
        if (!passwordMatch) {
            throw new Error('User or password incorrect');
        }
        return true;
    }

    private generateToken(user: User): string {
        const token = sign({}, process.env.APP_SECRET as string, {
            subject: user.getId.getId ?? undefined,
            expiresIn: "6h"
        });

        return token;
    }
}
