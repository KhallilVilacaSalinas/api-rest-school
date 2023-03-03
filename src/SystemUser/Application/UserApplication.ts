import { User } from "../Domain/Entity/User";
import { UserService } from "../Domain/Service/UserService";
import { InputUserStore } from "./Input/InputUserStore";


export class UserApplication {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }


    public async save(inputUserStore: InputUserStore) {
        return this.userService.save(
            new User(
                inputUserStore.getName,
                inputUserStore.getUsername,
                inputUserStore.getPassword
            )
        )
    }


}