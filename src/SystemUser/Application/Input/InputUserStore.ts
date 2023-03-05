import {User} from "../../Domain/Entity/User";

export class InputUserStore {
    
    private readonly name: string|null;

    private readonly username: string;

    private readonly password: string;
    
    constructor(
        name: string,
        username: string,
        password: string
    ) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    
    public getUser(): User {
        return new User(
            this.name,
            this.username,
            this.password
        )
    }
}
