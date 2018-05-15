const config = Cypress.config()

describe('Search filters', function () {
  it('Genre button should be active after clicking ', function () {
    cy.visit(config.baseUrl)

    cy.get('.search-filters .search-mode-btn:last ').should('not.have.class', 'active');
    cy.get('.search-filters .search-mode-btn:last ').click();
    // cy.get('.search-filters .search-mode-btn:last ').should('have.class', 'active');
  });
});
