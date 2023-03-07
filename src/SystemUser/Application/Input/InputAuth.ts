import { Auth } from "../../Domain/Entity/Auth";

export class InputAuth {
    
    public readonly username: string;

    public readonly password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public getAuth(): Auth {
        return new Auth(
            this.username,
            this.password
        )
    }
}
