let articleId: string;

describe('Детальная статья', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then(
            ({ body }) => {
                articleId = body.id;
                cy.visit(`articles/${body.id}`);
            },
        );
    });
    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('Загрузка страницы', () => {
        cy.getByDataTestId('ArticleDetailPage').should('exist');
        cy.getByDataTestId('ArticleDetail').should('exist');
    });

    it('Рекомендации к статье', () => {
        cy.getByDataTestId('ArticleRecommend').should('exist');
        cy.getByDataTestId('ArticleListItem.SMALL').should('have.length.gt', 2);
    });

    it('Отправка комментария', () => {
        cy.getByDataTestId('CreateCommentForm').scrollIntoView();
        cy.getByDataTestId('CreateCommentForm.input').click();
        cy.createComment('test comment');
        cy.getByDataTestId('CommentCard').should('exist');
    });

    it.only('Оценка статьи', () => {
        cy.getByDataTestId('Rating').scrollIntoView();
        cy.setRate(3, 'test text');
        cy.getByDataTestId('Rating')
            .get('[data-testid$=selected]')
            .should('have.length', 3);
    });
});
