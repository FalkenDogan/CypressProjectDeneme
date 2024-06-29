/// <reference types= "cypress" />

describe("Cypress RECORD", () => {
  it("Test runner kullanilarak record islemi", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://practice.expandtesting.com/");
    cy.get(
      ":nth-child(4) > :nth-child(1) > .card > .card-body > .card-title > .my-link"
    ).click();
    cy.get("#username").clear("t");
    cy.get("#username").type("test");
    cy.get("#password").clear("te");
    cy.get("#password").type("test");
    cy.get("#login > .btn").click();
    cy.get(".btn-close").click();
    cy.get("#username").clear("pr");
    cy.get("#username").type("practice");
    cy.get("#password").clear("S");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("#login > .btn").click();
    cy.get("#flash").click();
    cy.get(".icon-2x").click();
    cy.get(".btn-close").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("practice test record denemesi", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").clear("m");
    cy.get("#search-input").type("my browser");
    cy.get("#search-button").click();
    cy.get(".card-title > .my-link").click();
    cy.get("#browser-toggle").click();
    cy.get("#browser-toggle").click();
    cy.get(".breadcrumb > :nth-child(1) > a").click();
    cy.get(
      "#examples > :nth-child(2) > :nth-child(3) > .card > .card-body > .card-title > .my-link"
    ).click();
    cy.get(".container > p > a").click();
    cy.get(".btn-close").click();
    cy.get(".breadcrumb > :nth-child(1) > a").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.only("YeniTestDenemesi", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").clear("m");
    cy.get("#search-input").type("my browser{enter}");
    cy.get("#search-button").click();
    cy.get(".card-title > .my-link").click();
    cy.get("#browser-toggle").click();
    cy.get(".d-flex").click();
    cy.get(".active").click();
    cy.get(".breadcrumb > :nth-child(1) > a").click();
    /* ==== End Cypress Studio ==== */
  });
});
