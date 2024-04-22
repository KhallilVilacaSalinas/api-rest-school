import { User } from "../../Domain/Entity/User";

export class OutputUser {

    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    public getOutput() : Object {
        return {
            'user': this.user.jsonSerialize()
        };
    }
}
