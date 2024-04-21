import { Profile } from '../../../src/entities/Profile';

let profileData: Profile;

describe('Редактирование профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
            profileData = data;
        });
    });

    afterEach(() => {
        cy.resetProfile(profileData.id!);
    });
    it('Загрузка профиля пользователя', () => {
        cy.getByDataTestId('ProfileCard.firstname').should('have.value', 'test_first');
    });
    it('Редактирование провиля', () => {
        const firstname = 'new_first';
        const lastname = 'new_lastname';
        cy.updateProfile(firstname, lastname);
        cy.getByDataTestId('ProfileCard.firstname').should('have.value', firstname);
        cy.getByDataTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});
