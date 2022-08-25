describe('index', () => {
  it('should display landing page', () => {
    cy.visit('/');

    cy.findByText(/play now/i).should('exist');
  });
});
