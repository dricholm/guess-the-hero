import heroesJson from 'dotaconstants/build/heroes.json';
import Hero from '../../src/interfaces/Hero';

describe('heroes', () => {
  it('should display hero list', () => {
    cy.visit('/');

    cy.findByText(/heroes/i).click();

    cy.findByText(/strength/i);
    cy.findByText(/agility/i);
    cy.findByText(/intelligence/i);

    const heroes = Object.values<Hero>(heroesJson);

    heroes.forEach(({ localized_name }) => {
      cy.findByAltText(localized_name);
    });

    const hero = heroes[0];
    cy.findByAltText(hero.localized_name).click();
    cy.findByText(hero.localized_name);
  });
});
