export class Auth {

    private readonly token: string;

    private readonly dateExpiration: string;

    constructor(token: string, dateExpiration: string) {
        this.token = token;
        this.dateExpiration = dateExpiration;
    }

    
}