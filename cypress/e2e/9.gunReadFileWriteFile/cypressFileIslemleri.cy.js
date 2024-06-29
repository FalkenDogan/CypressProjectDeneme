/// <reference types= "cypress"/>

describe("Cypress File Islemleri Dersi", () => {
  //yaygın kullanılan yöntem
  it("File Upload Islemi - Pozitif Case", () => {
    cy("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get("#fileInput").should("be.visible").attachFile({
      filePath: "dokuments/examplePDF.pdf",
    });
    cy.get("button#fileSubmit")
      .should("be.visible")
      .and("contain", "Upload")
      .click();
  });

  it("File Upload Islemi - Negatif Case", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get("#fileInput")
      .should("be.visible")
      .attachFile({ filePath: "../fixtures/dokuments/examplePDF01.pdf" });
    // if else eklenerek eger 500kb'den kucukse devam et buyukse hata mesaji al!!!
    cy.get("button#fileSubmit")
      .should("be.visible")
      .and("contain", "Upload")
      .click();
  });

  //üstteki yöntem çalışmazsa bu ynötem de kullanılabilir
  it.only("File Upload Islemi - Ikinci yontem", () => {
    cy.visit("https://practice.expandtesting.com/upload");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    const ornekDosya = "../fixtures/media/cypressLogo.png";

    cy.fixture(ornekDosya)
      .then(Cypress.Blob.base64StringToBlob) // convert islemi yapiliyor
      .then((fileContent) => {
        cy.get("#fileInput").attachFile(
          { fileContent, fileName: ornekDosya, mimeType: "image/**" },
          { subjectType: "drag-n-drop" }, //"image/**" ve sonrası yazılada bilir yazılmaya da bilir. subjekt type input da olur
          { subjectType: "input" }
        );
      });

    cy.get("button#fileSubmit")
      .should("be.visible")
      .and("contain", "Upload")
      .click();
  });
});

describe("Cypress ile File Download", () => {
  before(() => {
    cy.deleteDownloadsFolder();
  });

  it("File Download ve Delete Islemleri", () => {
    cy.visit("https://practice.expandtesting.com/download");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('a[data-testid="1716136102285_cypressLogo.png"]').click();
  });
});

describe("Write ve Read File islemleri", () => {
  it("Write File Ornek Calisma", () => {
    cy.writeFile("Documents/ornekDosya.docx", "Hello World"); //clasörü ve dosyayı oluşturuyor

    cy.writeFile("Documents/notDefteri.txt", "Hello World \n");
    cy.writeFile(
      "Documents/notDefteri.txt",
      "Cypress Derslerine devam ediyoruz. \n",
      { flag: "a+" }
    );
    cy.writeFile("Documents/notDefteri.txt", "Bugunku konumuz file islemleri", {
      flag: "a+",
    });
  });

  it("Read File Ornek Calisma", () => {
    cy.readFile("Documents/notDefteri.txt").should("contain", "Hello World");
    cy.readFile("Documents/ornekDosya.docx").should("eq", "Hello World");
    cy.readFile("Documents/notDefteri.txt").then((yazi) => {
      expect(yazi).to.equal(
        "Hello World \nCypress Derslerine devam ediyoruz. \nBugunku konumuz file islemleri"
      );
    });
  });
});
