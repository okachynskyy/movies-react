const config = Cypress.config()

describe('Search sorting', function () {
  it('"rating" button should be active after clicking ', function () {
    cy.visit(config.baseUrl)

    cy.get('.sort-controls .sort-item:last ').should('not.have.class', 'active');
    cy.get('.sort-controls .sort-item:last ').click();
    cy.get('.sort-controls .sort-item:last ').should('have.class', 'active');
  });

  it('"release date" button should be active after clicking ', function () {
    cy.get('.sort-controls .sort-item:first ').should('not.have.class', 'active');
    cy.get('.sort-controls .sort-item:first ').click();
    cy.get('.sort-controls .sort-item:first ').should('have.class', 'active');
  });
});
