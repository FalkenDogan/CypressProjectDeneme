/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homepage/homepage";
import login from "../../support/pageObjects/login/login";

describe("Alias - Then - Wrap - Each Kullanim Ornekleri", () => {
  before(() => {
    cy.log("Alias Then Each Wrap Kullanim Ornekleri Testi Basliyor!!!");
  });

  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    homepage.navigate();
  });

  after(() => {
    cy.log("Alias Then Each Wrap Kullanim Ornekleri Testi Tamamlandi!!!");
  });

  it("Alias Ornek Kullanim", { tags: "@if" }, () => {
    cy.get("#customer_login").as("h2LoginDogrula");
    cy.get("@h2LoginDogrula").should("contain", "Login");
    cy.get("@h2LoginDogrula").should("contain", "Username");
  });

  //üsttekinden farklı olarak burada kodalrı then ile bağladık. aşağıda birden fazla kullandık. zincirleme fonksiyon yaptık.
  it("Then Ornek Kullanim", { tags: "@ifame" }, () => {
    cy.get("#customer_login")
      .as("h2LoginDogrula")
      .then(() => {
        cy.get("@h2LoginDogrula").should("contain", "Login");
        cy.get("@h2LoginDogrula").should("contain", "Username");

        login.fillUsername("deneme123@test.com");
        login.fillPassword("Deneme@12345");
        login.loginBtn("Login");
      })
      .then(() => {
        cy.wait(2000);
        cy.logout();
      });
  });

  it("Wrap ve Each Kullanim Ornegi", () => {
    cy.get('input[type="email"]').each((el) => {
      cy.log(el);
      cy.wrap(el).type("Test");
      //cy.wrap(el).click();
    });

    cy.get('input[type="submit"]')
      .as("button")
      .each((el2) => {
        cy.log(el2);
      });
  });
});
