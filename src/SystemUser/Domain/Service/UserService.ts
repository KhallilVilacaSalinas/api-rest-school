import { Cryptography } from "../../../../Kernel/Cryptography/Cryptography";
import { UnprocessableEntity } from "../../../../Kernel/http/UnprocessableEntity";
import { UserRepository } from "../../Infrastructure/Repository/UserRepository";
import { User } from "../Entity/User";

export class UserService {

    private userRepository: UserRepository

    constructor(
        
    ) {
        this.userRepository = new UserRepository();
    }

    public async save(user: User) : Promise<User> {
        user.userValidate();

        await this.userAlreadyExists(user);

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

    private async userAlreadyExists(user: User) : Promise<boolean> {
        const currentUser: User = await this.getUserByUsername(user);

        if (currentUser.getUsername === user.getUsername) {
            throw new UnprocessableEntity(['user already exist'])
        }

        return true;
    }

    public async getUserByUsername(user: User) : Promise<User> {
        return await this.userRepository.getUserByUsername(user);
    }
}