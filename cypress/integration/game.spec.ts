describe('game', () => {
  it('should display match info and result', () => {
    cy.visit('/');
    cy.findByText(/play now/i).click();

    cy.findByText(/inventory/i);
    cy.findByAltText(/abaddon/i);

    cy.findByPlaceholderText(/filter/i).type('random text');
    cy.findByText(/no hero/i);

    cy.findByPlaceholderText(/filter/i)
      .clear()
      .type('t');
    cy.findByAltText('Techies').click();
    cy.findByText(/select techies/i).click();

    cy.findByText(/results/i);
    cy.findByText(/dotabuff/i)
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(/https:\/\/www\.dotabuff\.com\/matches\/\d+/);
      });
    cy.findByText(/opendota/i)
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(/https:\/\/www\.opendota\.com\/matches\/\d+/);
      });
    cy.findByText(/new game/i);
  });
});
