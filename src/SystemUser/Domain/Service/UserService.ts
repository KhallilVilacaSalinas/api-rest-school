import { Cryptography } from "../../../../Kernel/Cryptography/Cryptography";
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

        if (userAlreadyExists.getUsername !== '') {
            throw new Error('Usuario ja existe')
        }

        const password = await Cryptography.hash(user.getPassword);

        return await this.userRepository.save(
            new User(
                user.getId,
                user.getName,
                user.getUsername,
                password
            )
        ); 
    }

    public async getUserByUsername(user: User) : Promise<User> {
        return await this.userRepository.getUserByUsername(user);
    }
}