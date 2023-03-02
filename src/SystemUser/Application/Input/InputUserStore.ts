export class inputUserStore {
    
    private _name: string|null;

    private _username: string|null;

    private _password: string|null;
    
    constructor(
        name: string|null,
        username: string|null,
        password: string|null
    ) {
        this._name = name;
        this._username = username;
        this._password = password;
    }

    
    
    /**
     * get name
     */
    public get name(): string {
        
    }
    
    
    
    
}