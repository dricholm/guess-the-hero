describe('game', () => {
  it('should display match info and result', () => {
    cy.intercept('GET', 'https://api.opendota.com/api/publicMatches', {
      fixture: 'public-matches.json',
    });
    cy.intercept('GET', 'https://api.opendota.com/api/matches/1234567890', {
      fixture: 'match-1234567890.json',
    });

    cy.visit('/play');

    cy.findByText(/inventory/i);
    cy.findByAltText(/shadow fiend/i).click();
    cy.findByText(/select/i).click();

    cy.findByText(/results/i);
    cy.findByText(/\bcorrect\b/i);
    cy.findByText(/dotabuff/i)
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(
          /https:\/\/www\.dotabuff\.com\/matches\/1234567890/,
        );
      });
    cy.findByText(/opendota/i)
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(
          /https:\/\/www\.opendota\.com\/matches\/1234567890/,
        );
      });
    cy.findByText(/new game/i);
  });
});
