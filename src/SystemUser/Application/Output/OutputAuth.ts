import { Auth } from "../../Domain/Entity/Auth";

export class OutputAuth {

    private auth: string;

    constructor(auth: string) {
        this.auth = auth;
    }

    public getOutput() : string {
        return this.auth;
    }
}