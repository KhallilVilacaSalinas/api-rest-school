import { UserRepository } from "../../Infrastructure/Repository/UserRepository";
import { User } from "../Entity/User";

export class UserService {

    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async save(user: User) : Promise<User> {
        return await this.userRepository.save(user); 
    }
}