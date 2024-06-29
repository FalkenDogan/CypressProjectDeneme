class LoginPage {
  visit() {
    cy.visit("https://shop.clarusway.net/");
  }

  clickLoginButton() {
    cy.get("li > .inline-flex").click();
  }

  fillEmail(email) {
    cy.get("#email").type(email);
  }

  fillPassword(password) {
    cy.get("#password").type(password);
  }

  submit() {
    cy.xpath("//button[normalize-space()='Login']").click();
  }
}

export default LoginPage;
