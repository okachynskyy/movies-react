const config = Cypress.config()

describe('App', function () {
  it('should have title', function () {
    cy.visit(config.baseUrl)
    cy.title().should('include', 'Netflixroulette')
  });
});
