//npm install --save-dev @faker-js/faker

/// <reference types= "cypress" />

const { faker } = require("@faker-js/faker");

let kullaniciAdi = faker.name.firstName();
let kullaniciEmail = faker.internet.email();
let parola = faker.internet.password();
let adres = faker.location.secondaryAddress();

describe("Cypress ile Fakerjs kullanimi ", () => {
  it("fakerjs kullanim 1", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.get("#username").type(kullaniciAdi);
    cy.get("#password").type(parola);
    cy.wait(1500);
  });

  it("fakerjs kullanim 2", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.get("#username").type(kullaniciEmail);
    cy.get("#password").type(parola);
    cy.wait(1500);
  });

  it("fakerjs kullanim deneme", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.get("#username").type(adres);
    cy.get("#password").type(parola);
    cy.wait(1500);
  });
});

describe("automationexercise", () => {
  it("login hata mesaji", () => {
    cy.visit("https://www.automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(kullaniciAdi);
    cy.get('[data-qa="login-password"]').type(parola);
    cy.get('[data-qa="login-button"]').click();

    cy.get('[data-qa="login-email"]')
      .invoke("prop", "validationMessage")
      .should(
        "eq",
        `Die E-Mail-Adresse muss ein @-Zeichen enthalten. In der Angabe "${kullaniciAdi}" fehlt ein @-Zeichen.`
      );
  });
});
