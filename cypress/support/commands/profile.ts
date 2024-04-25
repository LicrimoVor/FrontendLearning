export const updateProfile = (
    firstname: string = 'new',
    lastname: string = 'lastname',
) => {
    cy.getByDataTestId('EditableProfileCardHeader.edit').click();
    cy.getByDataTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByDataTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByDataTestId('EditableProfileCardHeader.save').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
        Authorization: '123',
    },
    body: {
        id: '4',
        first: 'test_first',
        lastname: 'test_last',
        age: 10,
        currency: 'RUB',
        country: 'Russia',
        city: 'SBK',
        username: 'testuser',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    },
});

Cypress.Commands.add('updateProfile', updateProfile);
Cypress.Commands.add('resetProfile', resetProfile);

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname?: string, lastname?: string): Chainable<void>;
            resetProfile(profileId: string): ReturnType<typeof resetProfile>;
        }
    }
}
