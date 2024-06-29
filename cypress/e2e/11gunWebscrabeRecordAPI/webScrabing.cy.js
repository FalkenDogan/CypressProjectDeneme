//cypress web scraping

describe("Web Scraping - 1", () => {
  it("Cypress ile veri yazdirma yada toplama", () => {
    cy.visit("https://practice.expandtesting.com/my-browser");

    cy.get("#browser-toggle")
      .as("button")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@button")
          .should("be.visible")
          .and("have.text", "Hide Browser Information");
        // sonuclar bos arrayini olusturduk
        const sonuclar = [];
        // secilen selectore takma isim atandi
        cy.get("#browser-info tr > td").as("tabloBilgiler");
        // takma isim ile donguye alinip loglandi ve sonuclar arrayinin icerisine push edildi
        cy.get("@tabloBilgiler")
          .each(($el, index) => {
            cy.log("Sonuc: " + index + " - " + $el.text());
            sonuclar.push($el.text());
          })
          // burada elde edilen sonuclar sonuclar.txt dosyasina yazdirildi.
          .then(() => {
            cy.writeFile("Documents/sonuclar.txt", sonuclar);
          });
      });
  });
});

describe.only("Web Scraping - 2", () => {
  it("Cypress ile veri yazdirma yada toplama", () => {
    cy.visit("https://practice.expandtesting.com/my-browser");

    cy.get("#browser-toggle")
      .as("button")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@button")
          .should("be.visible")
          .and("have.text", "Hide Browser Information");
        // sonuclar bos arrayini olusturduk
        const sonuclar2 = [];
        // secilen selectore takma isim atandi
        cy.get("tbody tr td b").as("tabloBilgiler2");
        // takma isim ile donguye alinip loglandi ve sonuclar arrayinin icerisine push edildi
        cy.get("@tabloBilgiler2")
          .each(($el, index) => {
            cy.log("Sonuc: " + index + " - " + $el.text());
            sonuclar2.push($el.text());
          })
          // burada elde edilen sonuclar sonuclar.txt dosyasina yazdirildi.
          .then(() => {
            cy.writeFile("Documents/sonuclar2.docx", sonuclar2);
          });
      });
  });
});
