"use strict";

export class InputUserStore {
    
    private name: string|null;

    private username: string|null;

    private password: string|null;
    
    constructor(
        name: string|null,
        username: string|null,
        password: string|null
    ) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    
    public get getName(): string|null {
        return this.name;
    }
    
    public get getUsername(): string|null {
        return this.username;
    }

    public get getPassword(): string|null {
        return this.password;
    }
}
