import { describe, it, expect, beforeEach } from 'vitest';
import { UserService } from '../../../../src/SystemUser/Domain/Service/UserService';
import { User } from '../../../../src/SystemUser/Domain/Entity/User';
import { UserId } from '../../../../src/SystemUser/Domain/Entity/UserId';

let userService: UserService;

describe('User userService', () => {
    beforeEach(() => {
        userService = new UserService();
    })

    it('should be able to create a user', async () => {
        const user = await userService.save(new User(
            new UserId(null),
            'Khallil Vilaca Salinas',
            'Lucas',
            '1234'
        ));

    })
})
