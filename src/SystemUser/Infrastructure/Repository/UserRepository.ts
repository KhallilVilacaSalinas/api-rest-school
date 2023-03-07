import { prismaClient } from "../../../../Kernel/database/prismaClient";
import { IUser } from "../../Domain/Entity/IUser";
import { User } from "../../Domain/Entity/User";
import { UserId } from "../../Domain/Entity/UserId";

export class UserRepository implements IUser{
    
    async save(user: User): Promise<User> {

        const row = await prismaClient.user.create({
            data: {
                'name': user.getName,
                'username': user.getUsername,
                'password': user.getPassword
            }
        });

        return Promise.resolve(
            new User(
                new UserId(row.id),
                row.name,
                row.username, 
                row.password
            )
        )
    }

    async getUserByUsername(user: User): Promise<User> {
        const row = await prismaClient.user.findFirst({
            where: {
                username: user.getUsername
            }
        });

        return Promise.resolve(
            new User(
                new UserId(row?.id ?? null),
                row?.name ?? null,
                row?.username ?? '',
                row?.password ?? ''
            )
        )
    }
}
