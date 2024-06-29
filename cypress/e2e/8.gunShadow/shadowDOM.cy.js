//Shadow dersi

/// <reference types= "cypress" />

describe("Cypress Shadow Dersi", () => {
  it("Shadow Kullanimi", () => {
    cy.visit("https://practice.expandtesting.com/shadowdom");

    cy.get("#shadow-host")
      .shadow()
      .find("#my-btn")
      .as("inputAlani")
      .should("be.visible")
      .and("contain", "Shadow DOM") //and de olur should da
      .should("have.css", "background-color", "rgb(24, 43, 69)")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "border-width", "4px")
      .and("have.css", "height", "40px")
      .should("have.css", "cursor", "pointer");
    // Buradan sonrasi sadece bir ornek. input alani gibi dusunuldu varsayildi.
    // .type('Deneme').then(() => {
    //     cy.get('@inputAlani').should('be.visible').and('have.text', 'Deneme')
    // })
  });
});

describe("Cypress Shadow Dersi - 2", () => {
  it("Shadow Kullanim - 2", () => {
    cy.visit("http://uitestingplayground.com/shadowdom");

    cy.get("guid-generator")
      .as("shadowOrnek") //alias
      .shadow()
      .find("#editField")
      .should("be.empty")
      .type("Test Shadow");

    cy.get("@shadowOrnek") //allias
      .shadow()
      .find("#buttonGenerate")
      .should("be.visible")
      .click();

    cy.get("@shadowOrnek").shadow().find("#buttonCopy").should("be.visible");
  });
});
