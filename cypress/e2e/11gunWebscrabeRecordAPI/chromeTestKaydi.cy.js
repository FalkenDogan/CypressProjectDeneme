//bunu chromedan kaydetip çektik
//npx @cypress/chrome-recorder cypress/downloads/UygulamaTestKaydi.json -o=cypress/e2e/11gunWebscrabeRecordAPI
/*
chrome recorder paketinin yuklenmesi icin
npm install -g @cypress/chrome-recorder
chrome uzerinden yapilan kayit isleminin json formatinda export edilmesi ve bilgisayarimiza indirilmesi gerekiyor.
Bilgisayrimizda indirme isleminden sonra terminalde convert islemini su komut ile yapiyoruz:
npx @cypress/chrome-recorder ~/Downloads/dosyaAdi.json -o=cypress/e2e/cypress-dersleri
*/
describe("UygulamaTestKaydi", () => {
  it("tests UygulamaTestKaydi", () => {
    cy.viewport(991, 919);
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").click();
    cy.get("#search-input").type("web inputs");
    cy.get("#search-button").click();
    cy.get("main a").click();
    cy.location("href").should(
      "eq",
      "https://practice.expandtesting.com/inputs"
    );
    cy.get("#btn-display-inputs").click();
    cy.get("#input-number").click();
    cy.get("#input-number").type("5");
    cy.get("#btn-display-inputs").click();
    cy.get("#btn-clear-inputs").click();
    cy.get("main a").click();
    cy.location("href").should("eq", "https://practice.expandtesting.com/");
  });
});
//# recorderSourceMap=BCBDBEBFBGBHCJBKBLBMBNBOC
