class Login {
  fillUsername(username) {
    cy.get("#username")
      .should("be.empty")
      .and("be.visible")
      .type(username, { log: false }); //veriler kodlar çalışırken consolda gözükmesin isteniyorsa log: false eklenecek
  }
  fillPassword(password) {
    cy.get("#password")
      .should("be.empty")
      .and("be.visible")
      .type(password, { log: false });
  }

  loginBtn(value) {
    cy.get('input[value="Login"]')
      .should("be.enabled")
      .and("have.value", value)
      .click();
  }
  errorMsg(error) {
    cy.get(".woocommerce-error").should("be.visible").and("contain", error);
  }
}

export default new Login();
