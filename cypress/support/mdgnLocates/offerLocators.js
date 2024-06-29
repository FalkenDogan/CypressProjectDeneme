class Offers {
  mainPage() {
    cy.visit("https://shop.clarusway.net/");
  }

  verifyUrl(url) {
    cy.url().should("include", url);
  }

  verifyTitle(title) {
    cy.title().should("eq", title);
  }
}

export default new Homepage();
