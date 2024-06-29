//Cypress Cookies, Cypress Test Isolation, Cypress Local Storage Kullanimlari ve Ornekler

/// <reference types= "cypress" />

describe("Cypress Clear Cookies", () => {
  it("Cypress Cookies", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.getCookies().should("have.length", 4);
    cy.clearCookies();
    cy.getCookies().should("have.length", 0);
    cy.getCookies().should("be.empty");
  });

  it("Cypress Belirli Cookies", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.clearCookie("express:sess");
    cy.clearCookie("express:sess.sig");

    cy.getCookies().should("have.length", 2);
  });
});

describe("Cypress Cookie Ekleme", () => {
  it("Cypress Cookie Ekleme Ornegi", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.setCookie("B", "cypress-test-degisim");

    cy.wait(2000);

    cy.clearCookie("B", "cypress-test-degisim");
  });
});

describe("Cypress Test Isolation", { testIsolation: false }, () => {
  before(() => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Test Isolation icin Ornek", () => {
    cy.get("#fileInput")
      .should("be.visible")
      .attachFile({ filePath: "../fixtures/documents/testDocument.docx" });
    cy.get("button#fileSubmit")
      .should("be.visible")
      .and("contain", "Upload")
      .click();
  });

  it("Test Isolation icin ornek 2", () => {
    cy.get("ol > li:nth-child(1) > a").should("be.visible").click();
  });
});

describe("Cypress Test Isolation - 2", { testIsolation: false }, () => {
  before(() => {
    cy.visit("https://practice.expandtesting.com/inputs");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Test Isolation icin Ornek", () => {
    cy.get("#btn-display-inputs").should("be.visible").click();
    cy.get("#output-number").should("be.empty");
  });

  it("Test Isolation icin ornek 2", () => {
    cy.get("#btn-clear-inputs").should("be.visible").click();
    cy.get("#input-number").should("be.empty").type("123");
    cy.get("#btn-display-inputs").should("be.visible").click();
    cy.get("#output-number").should("not.be.empty").and("contain", "123");
  });
});

describe.only("Cypress Local Storage", () => {
  it("Cypress Local Storage Ornek", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.log(localStorage.length); // local storage sayfa yuklendiginde 0 olarak yazdiriliyor

    localStorage.setItem("clarusway", "test"); // local storage ekliyoruz.
    localStorage.setItem("cypress-dersleri", "cypressLocal Storage");
    localStorage.setItem("cypress", "test automation");

    cy.log(localStorage.length); // local storage 3 olarak yazdiriliyor

    cy.wait(2000).then(() => {
      localStorage.removeItem("clarusway", "test"); // removeItem sadece belirlenen key ve value siler.
      cy.log(localStorage.length); // local storage 2 olarak yazdiracak, cunku clarusway keyi, degeri test olan silinecek
    });

    cy.wait(1000).then(() => {
      localStorage.clear(); // clear komutunu butun local storage'i temizler/siler.
      cy.log(localStorage.length); // butun storage temizlendigi icin sonuc 0 yazdirilacak
    });
  });
});
