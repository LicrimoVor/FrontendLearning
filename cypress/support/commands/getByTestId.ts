import { selectByDataTestId } from 'cypress/helpers/select.dataTestId';

const getByDataTestId = <E extends Node = HTMLElement>(testId: string) => (
    cy.get<E>(selectByDataTestId(testId))
);

Cypress.Commands.add('getByDataTestId', getByDataTestId);
declare global {
    namespace Cypress {
        interface Chainable {
            getByDataTestId(testId: string): Chainable<JQuery>
        }
    }
}
