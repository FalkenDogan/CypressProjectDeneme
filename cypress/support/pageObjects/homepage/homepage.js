class Homepage {
  navigate() {
    cy.visit("https://practice.automationtesting.in/my-account/");
  }

  verifyUrl(url) {
    cy.url().should("include", url);
  }

  verifyTitle(title) {
    cy.title().should("eq", title);
  }
}

export default new Homepage();
