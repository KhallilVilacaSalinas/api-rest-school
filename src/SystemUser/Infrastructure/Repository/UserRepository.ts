// noinspection JSObjectNullOrUndefined

import { prismaClient } from "../../../../Kernel/database/prismaClient";
import { IUser } from "../../Domain/Entity/IUser";
import { User } from "../../Domain/Entity/User";

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
            new User(row.name, row.username, row.password)
        )
    }


    async getUserByUsername(user: User): Promise<User> {
        const row = await prismaClient.user.findFirst({
            where: {
                username: user.getUsername
            }
        });

        if (row !== null) {
            throw new Error('Não Encontrado')
        }

        return Promise.resolve(
            new User(
                row!.name,
                row!.username,
                row!.password
            )
        )
    }
}
