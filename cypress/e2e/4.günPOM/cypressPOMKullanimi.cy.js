import homepage from "../../support/pageObjects/homepage/homepage";
import login from "../../support/pageObjects/login/login";

describe("POM Kullanim Uygulamasi", () => {
  it("POM Kullanim Uygulamasi", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    homepage.navigate();
    homepage.verifyUrl("automationtesting");
    homepage.verifyTitle("My Account – Automation Practice Site");

    login.fillUsername("Mehmet");
    login.fillPassword("PASSWORD");
    login.loginBtn("Login");
    login.errorMsg("Mehmet");
  });
});
