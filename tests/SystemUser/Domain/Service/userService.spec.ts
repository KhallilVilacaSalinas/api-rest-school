import { describe, it, expect, beforeEach } from 'vitest';
import { UserService } from '../../../../src/SystemUser/Domain/Service/UserService';
import { User } from '../../../../src/SystemUser/Domain/Entity/User';
import { UserId } from '../../../../src/SystemUser/Domain/Entity/UserId';
import { UnprocessableEntity } from '../../../../Kernel/http/UnprocessableEntity';

let userService: UserService;

describe('User userService', () => {
    beforeEach(() => {
        userService = new UserService();
    })

    let user: User;
    it('should be able to create a user', async () => {
        user = new User(
            new UserId(null),
            'Khallil Vilaca Salinas',
            'Lucas1',
            '123'
        );

        const newUser = await userService.save(user);

        expect(newUser).toBeInstanceOf(User);
        expect(newUser.getUsername).toBe(user.getUsername);
        expect(newUser.getPassword).not.toBe(user.getPassword)
    });

    it('it should not be possible to register with the same username twice', async () => {
        await expect( async () => {
            await userService.save(user);
        }).rejects.toBeInstanceOf(UnprocessableEntity)
    });
});
