//bunu methodlara ulaşmak için ekliyoruz.
/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homepage/homepage";

describe("Cypress Custom Commands Kullanimi - 1", () => {
  it("Ornek Kullanim", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz
    homepage.navigate();
    homepage.verifyUrl("automationtesting");
    homepage.verifyTitle("My Account – Automation Practice Site");

    cy.login();
  });

  it("Ornek Kullanim 2", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için konulmuştu. Bunu custom command'ın içine de koyabiliriz

    cy.navigatePage();
    cy.verifyUrlAndTitle(
      "automationtesting",
      "My Account – Automation Practice Site"
    );
    cy.login3("yesimguzelgoz@yandex.com", "yesimguzelgoz@yandex.com", "Login");

    cy.logout();
  });

  it("Ornek Kullanim 3", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz
    homepage.navigate();
    homepage.verifyUrl("automationtesting");
    homepage.verifyTitle("My Account – Automation Practice Site");

    cy.login2();
  });
});
