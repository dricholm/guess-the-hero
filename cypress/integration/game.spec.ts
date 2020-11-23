describe('game', () => {
  it('should display match info and result', () => {
    cy.fixture('match').then((match) => {
      cy.server();
      cy.route({
        delay: 100,
        method: 'GET',
        url: 'https://api.opendota.com/api/publicMatches',
        response: [
          {
            match_id: 5713073800,
            match_seq_num: 4805873718,
            radiant_win: true,
            start_time: 1606126031,
            duration: 1795,
            avg_mmr: null,
            num_mmr: null,
            lobby_type: 0,
            game_mode: 22,
            avg_rank_tier: 36,
            num_rank_tier: 3,
            cluster: 135,
            radiant_team: '74,28,102,42,50',
            dire_team: '62,35,44,8,15',
          },
        ],
      }).as('publicMatches');
      cy.route({
        method: 'GET',
        url: 'https://api.opendota.com/api/matches/5713073800',
        response: match,
      }).as('match');

      cy.visit('/');

      cy.findByText(/play now/i).click();

      cy.findByLabelText(/loading/i);

      cy.wait('@publicMatches');
      cy.wait('@match');

      cy.findByText(/pick a hero/i);

      cy.findByText('29:55').should('have.css', 'opacity', '0');
      cy.findByRole('button', { name: /^duration/i }).click();
      cy.findByText('29:55').should('have.css', 'opacity', '1');

      cy.findByLabelText(/hero name/i)
        .type('techies')
        .type('{enter}');
      cy.findByRole('button', { name: /pick/i }).click();

      cy.findByText(/incorrect/i);
      cy.findByText(/dotabuff/i)
        .should('have.attr', 'href')
        .then((href) => {
          expect(href).to.equal('https://www.dotabuff.com/matches/5713073800');
        });
      cy.findByText(/opendota/i)
        .should('have.attr', 'href')
        .then((href) => {
          expect(href).to.equal('https://www.opendota.com/matches/5713073800');
        });
    });
  });
});
