import homepage from "../../pageObjects/homepage/homepage";

Cypress.Commands.add("navigatePage", () => {
  homepage.navigate();
});

Cypress.Commands.add("verifyUrlAndTitle", (url, title) => {
  homepage.verifyUrl(url);
  homepage.verifyTitle(title);
});
