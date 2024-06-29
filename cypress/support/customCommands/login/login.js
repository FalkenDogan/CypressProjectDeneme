import login from "../../pageObjects/login/login";
import credentials from "C:/Users/smust/OneDrive/Belgeler/Clarusway eğitim materyalleri/Cypress/cypress/fixtures/credential.json";
import text from "C:/Users/smust/OneDrive/Belgeler/Clarusway eğitim materyalleri/Cypress/cypress/fixtures/text.json";

//Custom commands kullanimi POM ile
Cypress.Commands.add("login", () => {
  login.fillUsername("creyesimguzelgoz@yandex.com");
  login.fillPassword("yesimguzelgoz@yandex.com");
  login.loginBtn("Login");
});

//Custom commands kullanimi POM OLMADIN

Cypress.Commands.add("login2", () => {
  cy.get("#username")
    .should("be.empty")
    .and("be.visible")
    .type(credentials.username, { log: false });
  cy.get("#password")
    .should("be.empty")
    .and("be.visible")
    .type(credentials.password);
  cy.get('input[value="Login"]')
    .should("be.enabled")
    .and("have.value", text.loginbuttonDegeri)
    .click();
});

//Custom commands parametre kullanim
Cypress.Commands.add("login3", (username, password, text) => {
  login.fillUsername(username);
  login.fillPassword(password);
  login.loginBtn(text);
});
