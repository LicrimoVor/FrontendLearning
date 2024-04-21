export const setRate = (rate:number, feedback: string) => {
    cy.getByDataTestId(`StarRating.${rate}`).click();
    cy.wait(1000);
    cy.getByDataTestId('Rating.text').type(feedback);
    cy.getByDataTestId('Rating.send').click();
};

Cypress.Commands.add('setRate', setRate);
declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, feedback: string): Chainable<void>,
        }
    }
}
