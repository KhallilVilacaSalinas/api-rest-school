import { UserId } from "./UserId";

export class User {

    private id: UserId;

    private name: string | null;

    private username: string;

    private password: string;

    constructor(
        id: UserId,
        name: string | null,
        username: string,
        password: string
    ) {
        this.id = id
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public get getId() : UserId {
        return this.id
    }
    
    public get getName() : string | null {
        return this.name;
    }
    
    
    public get getUsername() : string {
        return this.username;
    }

    
    public get getPassword() : string {
        return this.password
    }

    public userValidate() : boolean {
        
        let errors: Error[] = [];
        
        if (!this.getUsername) {
            errors.push(Error('Username invalid or not informed'));
        }

        if (!this.getPassword) {
            errors.push(Error('Password invalid or not informed'));
        }

        if (errors.length > 0) {
            throw new Error(errors[errors.length - 1].message);
        }

        return true;
    }

    public jsonSerialize(): Object {
        return {
            'name': this.getName,
            'username': this.getUsername,
            'password': this.getPassword
        };
    }
}