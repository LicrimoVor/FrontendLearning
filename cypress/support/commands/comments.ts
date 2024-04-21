export const createComment = (text: string) => {
    cy.getByDataTestId('CreateCommentForm.input').type(text);
    cy.getByDataTestId('CreateCommentForm.send').click();
};

Cypress.Commands.add('createComment', createComment);
declare global {
    namespace Cypress {
        interface Chainable {
            createComment(text: string): Chainable<void>,
        }
    }
}
