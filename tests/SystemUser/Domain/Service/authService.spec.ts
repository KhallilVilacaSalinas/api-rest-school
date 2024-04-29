import { beforeEach, describe, expect, it } from "vitest";
import { AuthService } from "../../../../src/SystemUser/Domain/Service/AuthService";
import { User } from "../../../../src/SystemUser/Domain/Entity/User";
import { UserService } from "../../../../src/SystemUser/Domain/Service/UserService";
import { UserId } from "../../../../src/SystemUser/Domain/Entity/UserId";

let userService: UserService;
let authService: AuthService;

describe('Auth authService', () => {
    beforeEach(() => {
        userService = new UserService();
        authService = new AuthService();
    });

    let user: User;
    it('should be able to authenticate user', async () => {
        user = new User(
            new UserId(null),
            'Khallil Vilaca Salinas',
            'Lucas1',
            '123'
        );

        await userService.save(user);

        const auth = await authService.auth(user);
        
        console.log(auth);
        
        expect(auth).toEqual(expect.any(String))
    })
});