import LoginPage from "../../../support/FAQPages/LoginPage";
import FAQPage from "../../../support/FAQPages/FAQPage";

describe("US 6 FAQ Tests ", () => {
  const faqPage = new FAQPage();
  beforeEach(() => {
    // Herhangi bir uncaught exception'ın testleri bozmasını önlemek için
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // Cypress-xpath eklentisinin dahil edildiğinden emin olun
    require("cypress-xpath");

    // Login ve FQA  page nesnesini oluşturma
    const loginPage = new LoginPage();

    // Siteye gitme ve login işlemleri
    loginPage.visit();
    loginPage.clickLoginButton();
    loginPage.fillEmail("alexi.stein@yandex.com.tr");
    loginPage.fillPassword("PickBazar.123");
    loginPage.submit();
  });

  it("TC 1: FAQ page assertion", () => {
    // Herhangi bir uncaught exception'ın testleri bozmasını önlemek için
    //constructorlardan nesne oluştur

    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    faqPage.verifyFAQPage();
  });

  it("TC 2: in FAQ page question bars sind visible", () => {
    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    //sayfada 4 adet soru barı olduğunu doğrulama
    faqPage.visibilityOfBars();
  });

  it("TC 3: There is 4 question bars in FAQ page", () => {
    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    //sayfada 4 adet soru barı olduğunu doğrulama
    faqPage.countBars(4);
  });

  it("TC 4: Question bars are clickable", () => {
    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    faqPage.questionBarsClickability();
  });

  it("TC 5: Answers are visible", () => {
    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    faqPage.answersVisibility();
  });

  it.only("TC 6: Visibility of plus sign", () => {
    // FAQ sayfasına gitme ve doğrulama
    faqPage.clickFAQButton();
    faqPage.visibilityOfPlusSign();
  });
});
