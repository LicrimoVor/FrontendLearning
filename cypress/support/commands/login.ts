import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';

export const login = (username: string = 'testuser', password: string = '123') => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
        username,
        password,
    },
}).then(
    ({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    },
);

Cypress.Commands.add('login', login);
declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
        }
    }
}
