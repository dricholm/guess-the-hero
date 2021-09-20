import itemsJson from 'dotaconstants/build/items.json';

describe('items', () => {
  it('should display item list', () => {
    cy.visit('/');

    cy.findAllByRole('link', { name: /items/i }).click();

    cy.findByText(/consumables/i);
    cy.findByText(/attributes/i);
    cy.findByText(/equipment/i);
    cy.findByText(/miscellaneous/i);
    cy.findByText(/secret shop/i);
    cy.findByText(/accessories/i);
    cy.findByText(/support/i);
    cy.findByText(/magical/i);
    cy.findByText(/armor/i);
    cy.findByText(/weapons/i);
    cy.findByText(/artifacts/i);
    cy.findByText(/neutral tier 1/i);
    cy.findByText(/neutral tier 2/i);
    cy.findByText(/neutral tier 3/i);
    cy.findByText(/neutral tier 4/i);
    cy.findByText(/neutral tier 5/i);
    cy.findByText(/roshan/i);
    cy.findByText(/removed/i);

    const items =
      // @ts-expect-error Not all values needed
      Object.values<{ cost: number; dname: string; id: number }>(itemsJson);

    const tpScroll = items.find(({ id }) => id === 46);

    cy.findByAltText(tpScroll.dname).click();
    cy.findByText(tpScroll.dname);
    cy.findAllByAltText(/cost/i)
      .parent()
      .parent()
      .findByText(tpScroll.cost.toString());
    cy.findAllByLabelText(/close/i).click();
    cy.findByText(tpScroll.dname).should('not.exist');
  });
});
