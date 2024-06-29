import homepage from "../../support/pageObjects/homepage/homepage";
import credentials from "../../fixtures/credential.json";
import text from "../../fixtures/text.json";

//bunu methodlara ulaşmak için ekliyoruz.
/// <reference types= "cypress" />

describe("Cypress Fixture dersi ", () => {
  //bu it'de pom uygulaması var. datalar pom'a göre çekiliyor.
  it("Fixture örnek kullanim", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz

    homepage.navigate();
    homepage.verifyUrl("automationtesting");
    homepage.verifyTitle("My Account – Automation Practice Site");
    //Burada kullanılan its kendisinden önceki komutun içinde yer alan dataları almaya yarar
    cy.fixture("userData")
      .its("data")
      .then((user) => {
        const username = user.username;
        const password = user.password;
        cy.login3(username, password, "Login");
      });
  });

  //aşağıdakinde sadece custom commandslar var. datalar custom commandslara göre çekiliyor
  //aşağıda herşeyi fixture'deki json'lardan çektik.
  //bu aşağıdaki örnek kullanım 2 daha dinamik daha tercih edilen
  it("Fixture örnekkullanim 2", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz

    cy.navigatePage();
    cy.verifyUrlAndTitle(text.url, text.title);
    cy.login3(
      credentials.username,
      credentials.password,
      text.loginbuttonDegeri
    );

    cy.logout();
  });

  //aşağıdak allias kullandık
  it("Fixture örnekkullanim 3", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz

    cy.navigatePage();
    cy.verifyUrlAndTitle(text.url, text.title);

    cy.fixture("credentials").as("kullaniciVerileri"); //allias kullanımı
    cy.get("@kullaniciVerileri").then((data) => {
      cy.login3(data.username, data.password, text.loginbuttonDegeri);
    });
    cy.logout();
  });

  it("Fixture örnekkullanim 4", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); // bu satır exception için  için konulmuştu. Bunu custom command'ın içine de koyabiliriz

    cy.navigatePage();
    cy.verifyUrlAndTitle(text.url, text.title);
    cy.login2();
    cy.logout();
  });

  it("Fixture örnek kullanim 5", () => {
    cy.fixture("veriler/bilgiler").then((values) => {
      const degerKarsilastirma = values[0].veri2;
      console.log("burada 2 yazmali", degerKarsilastirma.id);

      cy.degerleriDogrula(
        degerKarsilastirma.id,
        degerKarsilastirma.isim,
        degerKarsilastirma.status
      );
    });
  });

  it("Fixture örnek kullanim 6", () => {
    cy.fixture("media/test.png")
      .then(Cypress.Blob.base64StringToBlob)
      .then((fileContent) => {
        cy.get("element id ya da class eklenir").attachedFile();
      });
  });

  İt("Fixture örnek kullanim 7", () => {
    cy.get("element id ya da class alindi").attachedFile({
      filePath: "media/test.png",
    });
  });
});
