import { selectByDataTestId } from '../../helpers/select.dataTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Рендеринг главной страницы', () => {
            cy.visit('/');
            cy.get(selectByDataTestId('MainPage')).should('exist');
        });

        it('Редирект с профиля пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByDataTestId('MainPage')).should('exist');
        });

        it('Редирект со списка статей', () => {
            cy.visit('/articles');
            cy.get(selectByDataTestId('MainPage')).should('exist');
        });

        it('Страница не найдена', () => {
            cy.visit('/lol_kek');
            cy.get(selectByDataTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });
        it('Страница профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByDataTestId('ProfilePage')).should('exist');
        });

        it('Страница со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByDataTestId('ArticlePage')).should('exist');
        });
    });
});
