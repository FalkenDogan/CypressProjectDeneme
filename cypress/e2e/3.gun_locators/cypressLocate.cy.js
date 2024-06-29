//bunu methodlara ulaşmak için ekliyoruz.
/// <reference types= "cypress" />

describe.skip("Cypress ile lcoate işlemleri", () => {
  it("cy.get, contains, find", () => {
    cy.get();
    cy.contains();
    cy.get().find();
  });

  it("cy.xpath kulanimi", () => {
    //eger xpath kullanılacaksa cy.get kullanılmaz. locate cy.xpath'in içine yazılır.
    //cy.get(locate).find(locate).click() yazımı xpath'de aşağıdaki gibidir
    //cy.xpath(locate).xpath(locate).click()

    cy.xpath("buraya xpath locati yazılacak");
  });
});

describe("Cypress ile locate etme ve ilk test", () => {
  it("login testi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://practice.automationtesting.in/my-account/");
    cy.url().should("include", "practice.automationtesting.in");
    cy.title().should("eq", "My Account – Automation Practice Site");

    cy.get("div h2")
      .contains("Login")
      .should("be.visible")
      .and("have.text", "Login");

    cy.get("#username").should("be.empty").and("be.visible").type("text");
    cy.wait(2000);
    cy.get("#username").clear();
    cy.get("#username").should("be.empty").and("be.visible").type("Ali Can");
    cy.wait(2000);
    cy.get("#password").should("be.empty").and("be.visible").type("parola");

    cy.get('input[value="Login"]')
      .should("be.enabled")
      .and("have.value", "Login")
      .click();

    cy.get(".woocommerce-error").should("be.visible").and("contain", "Ali Can");
  });

  it("Register Testi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://practice.automationtesting.in/my-account/");
    cy.xpath("//input[@id='reg_email']").should("be.empty").type("Deneme");
    cy.xpath("//input[@id='reg_password']").should("be.empty").type("parola");
  });
});
