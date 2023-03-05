import { UserRepository } from "../../Infrastructure/Repository/UserRepository";
import { User } from "../Entity/User";

export class UserService {

    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async save(user: User) : Promise<User> {
        user.userValidate();

        const userAlreadyExists: User = await this.getUserByUsername(user);

        if (!userAlreadyExists) {
            
        }

        return await this.userRepository.save(user); 
    }

    public async getUserByUsername(user: User) : Promise<User> {
        return await this.userRepository.getUserByUsername(user);
    }
}