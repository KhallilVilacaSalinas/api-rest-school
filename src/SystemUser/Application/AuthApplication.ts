import { User } from "../Domain/Entity/User";
import { UserId } from "../Domain/Entity/UserId";
import { AuthService } from "../Domain/Service/AuthService";
import { InputAuth } from "./Input/InputAuth";
import { OutputAuth } from "./Output/OutputAuth";

export class AuthApplication {

    private authService: AuthService

    constructor() {
        this.authService = new AuthService();
    }

    public async auth(inputAuth: InputAuth): Promise<OutputAuth> {
        return new OutputAuth(
            await this.authService.auth(
                new User(
                    new UserId(null),
                    null,
                    inputAuth.username,
                    inputAuth.password
                )
            )
        )
    }
}