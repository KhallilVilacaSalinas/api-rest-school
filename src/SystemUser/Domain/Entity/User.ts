
export class User {

    private name: string;

    private username: string;

    private password: string;

    constructor(
        name: string,
        username: string,
        password: string
    ) {
        this.name = name,
        this.username = username,
        this.password = password
    }

    
    public get getName() : string {
        return this.name;
    }
    
    
    public get getUsername() : string {
        return this.username;
    }

    
    public get getPassword() : string {
        return this.password
    }

    public jsonSerialize(): Object {
        return {
            'name': this.getName,
            'username': this.getUsername,
            'password': this.getPassword
        };
    }
    
    

}