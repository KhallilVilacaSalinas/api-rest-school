import { User } from "../Domain/Entity/User";
import { UserService } from "../Domain/Service/UserService";
import { InputUserStore } from "./Input/InputUserStore";
import {OutputUser} from "./Output/OutputUser";


export class UserApplication {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }


    public async save(inputUserStore: InputUserStore): Promise<OutputUser> {        
        return new OutputUser(
            await this.userService.save(inputUserStore.getUser())
        );
    }


}