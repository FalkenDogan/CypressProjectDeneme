/// <reference types= "cypress" />

describe(
  "Cypress packages",
  { tags: ["@cypress-packages", "@cypress-dersleri"] },
  () => {
    it("Cypress Iframe Kullanimi", { tags: "@iframe" }, () => {
      cy.visit("https://practice.expandtesting.com/iframe");

      cy.iframe("#mce_0_ifr")
        .find("p")
        .clear()
        .then(() => {
          cy.iframe("#mce_0_ifr")
            .find("p")
            .type("Cypress iframe dersi")
            .clear()
            .then(() => {
              cy.iframe("#mce_0_ifr")
                .find("p")
                .type("Cypress iframe dersi sil yaz");
            });
        });

      cy.iframe("#email-subscribe")
        .find('input[id="email"]')
        .should("be.visible")
        .type("example@example.com");
    });

    it("Cypress IF Kullanimi", { tags: "@if" }, () => {
      cy.visit("https://practice.expandtesting.com/login");

      cy.get("input#username").if("visible").type("Test");
      cy.get("input#password").if("visible").type("Deneme");
      cy.wait(500);

      cy.get("#login > .btn")
        .if()
        .click()
        .then(() => {
          cy.log("Tiklama isleme basarili");
        })
        .else()
        .log("Buton visible degil, test tamamlanamadi!");
    });

    it("Cypress IF Kullanimi-2", { tags: "@if2" }, () => {
      cy.visit("https://practice.expandtesting.com/inputs");

      cy.get("button#btn-display-inputs")
        .if()
        .click()
        .else()
        .log("Display Inputs butonu bulunamadi");
    });

    it("Cypress Trigger Kullanimi", () => {
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
      cy.get("#column-a").trigger("mousedown", { button: 0 });
      cy.get("#column-b")
        .trigger("mousemove")
        .trigger("mouseup", { force: true });
    });

    it.only("Cypress Real events", () => {
      cy.visit("https://practice.expandtesting.com/hovers");
      cy.wait(1000);
      cy.get("div.figure")
        .first()
        .realHover()
        .then(() => {
          cy.wait(3000);
          cy.get("div:nth-child(4) > div > a").realClick();
        });
    });
  }
);
