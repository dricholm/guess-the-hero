import { heroes as heroesJson } from 'dotaconstants';

describe('heroes', () => {
  it('should display hero list', () => {
    cy.visit('/');

    cy.findByText(/heroes/i).click();

    cy.findByText(/strength/i);
    cy.findByText(/agility/i);
    cy.findByText(/intelligence/i);
    cy.findByText(/universal/i);

    const heroes = Object.values(heroesJson);

    heroes.forEach(({ localized_name }) => {
      cy.findByText(localized_name);
    });
  });
});
