import { EditableProfileCard } from '../../src/features/Profile/EditableProfile';
import { TestProvider } from '../../src/shared/lib/tests/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '4',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard profileId="1" />
            </TestProvider>,
        );
    });
});
