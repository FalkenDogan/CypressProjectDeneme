/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homepage/homepage";

describe("Cypress Hooks Kullanimi", () => {
  before(() => {
    cy.log("TEST BASLIYORRR!!!");
  });

  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.log("Sayfa hatasiz acildi");
    homepage.navigate();
    cy.login3("deneme123@test.com", "Deneme@12345", "Login");
  });

  after(() => {
    cy.log("Test tamamlandi!!!");
  });

  afterEach(() => {
    cy.log("IT BLOGU TAMAMLANDI!!!!");
    cy.logout();
  });

  it("Sayfaya gidelim dogrulama yapalim", () => {
    homepage.verifyUrl("automationtesting");
    homepage.verifyTitle("My Account – Automation Practice Site");
  });

  it("Before kullanim ornegi", () => {
    // Burada test senaryomuz kostu
  });

  it("BeforeEach Kullanim Ornegi", () => {
    // Burada farkli bir test senaryomuz kostu!
  });
});
