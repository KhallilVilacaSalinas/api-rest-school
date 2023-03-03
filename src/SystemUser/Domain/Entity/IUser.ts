import { User } from "./User";

export interface IUser {
    save(user: User): Promise<User>
} 