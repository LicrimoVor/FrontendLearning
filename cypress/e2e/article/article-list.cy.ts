describe('Список статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('Загрузка страницы', () => {
        cy.getByDataTestId('ArticleList').should('exist');
        cy.getByDataTestId('ArticleListItem.SMALL').should('have.length.greaterThan', 3);
    });

    it('Кнопка изменения вида статей', () => {
        cy.getByDataTestId('ArticleViewSwitcher.BIG').click();
        cy.getByDataTestId('ArticleListItem.BIG').should('exist');
        cy.getByDataTestId('ArticleListItem.SMALL').should('not.exist');
    });

    // it('Сортировка и порядок', () => {
    //     cy.getByDataTestId('ArticleSortSelector.SORT').select('views');
    // });
});
