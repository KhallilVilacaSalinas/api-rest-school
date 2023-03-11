export class OutputAuth {

    private auth: string;

    constructor(auth: string) {
        this.auth = auth;
    }

    public getOutput() : Object {
        return {
            'token': this.auth
        } 
    }
}