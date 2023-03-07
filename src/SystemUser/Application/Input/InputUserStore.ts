import {User} from "../../Domain/Entity/User";
import { UserId } from "../../Domain/Entity/UserId";

export class InputUserStore {

    private readonly id: string|null;
    
    private readonly name: string|null;

    private readonly username: string;

    private readonly password: string;
    
    constructor(
        id: string|null,
        name: string,
        username: string,
        password: string
    ) {
        this.id = id,
        this.name = name;
        this.username = username;
        this.password = password;
    }
    
    public getUser(): User {
        return new User(
            new UserId(this.id),
            this.name,
            this.username,
            this.password
        )
    }
}
