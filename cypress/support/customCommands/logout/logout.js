Cypress.Commands.add("logout", () => {
  cy.get(".woocommerce-MyAccount-content > :nth-child(1) > a")
    .should("be.visible")
    .click();
});
