//const locators = require("../../support/mdgnLocates/FaqLocators"); // Düzenlenmiş dosya yolu
describe("US 6 FAQ Tests ", () => {
  it("TC 1: FAQ page assertion", () => {
    // Herhangi bir uncaught exception'ın testleri bozmasını önlemek için
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // Cypress-xpath eklentisinin dahil edildiğinden emin olun
    require("cypress-xpath");

    // Siteye gitme
    cy.visit("https://shop.clarusway.net/");

    // "Login" butonuna tıklama
    cy.get("li > .inline-flex").click();

    // Email ve şifre alanlarını doldurma
    cy.get("#email").type("alexi.stein@yandex.com.tr");
    cy.get("#password").type("PickBazar.123");

    // XPath kullanarak "Login" butonuna tıklama
    cy.xpath("//button[normalize-space()='Login']").click();

    //FAQ butonunu tıkla
    cy.xpath("//a[contains(text(),'FAQ')]").click();

    // FAQ sayfasında olduğunu doğrula
    cy.xpath("//h1[contains(text(),'FAQ')]").should("contain.text", "FAQ");
  });

  it("TC 2: FAQ page assertion", () => {
    // Herhangi bir uncaught exception'ın testleri bozmasını önlemek için
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // Cypress-xpath eklentisinin dahil edildiğinden emin olun
    require("cypress-xpath");

    // Siteye gitme
    cy.visit("https://shop.clarusway.net/");

    // "Login" butonuna tıklama
    cy.get("li > .inline-flex").click();

    // Email ve şifre alanlarını doldurma
    cy.get("#email").type("alexi.stein@yandex.com.tr");
    cy.get("#password").type("PickBazar.123");

    // XPath kullanarak "Login" butonuna tıklama
    cy.xpath("//button[normalize-space()='Login']").click();

    //FAQ butonunu tıkla
    cy.xpath("//a[contains(text(),'FAQ')]").click();

    // FAQ sayfasında olduğunu doğrula
    cy.xpath("//h1[contains(text(),'FAQ')]").should("contain.text", "FAQ");
  });
});
