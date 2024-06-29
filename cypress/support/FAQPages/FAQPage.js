class FAQPage {
  // FAQ button
  clickFAQButton() {
    cy.xpath("//a[contains(text(),'FAQ')]").click();
  }

  // FAQ page assertion
  verifyFAQPage() {
    cy.xpath("//h1[contains(text(),'FAQ')]").should("contain.text", "FAQ");
    cy.log("Test passed");
  }

  // visibility of question bars
  visibilityOfBars() {
    // Her bir "div h2" elementinin görünürlüğünü doğrulama
    cy.get("div h2").each(($bar) => {
      cy.wrap($bar).should("be.visible");
    });

    // Number of bars
    cy.get("div h2:visible")
      .its("length")
      .then((visibleBarsCount) => {
        cy.log("Number of visible bars is: " + visibleBarsCount);
      });
  }

  //Count the bars
  countBars(count) {
    // "div h2" selector ile tüm elementleri seçme
    cy.get("div h2").should("have.length", count);
    cy.log("Number of bar is : " + count);
  }

  questionBarsVisibility(count) {
    // "div h2" selector ile tüm elementleri seçme
    cy.get("div h2").should("be.visible");
  }

  //Random bar clik
  questionBarsClickability() {
    // "div h2" selector ile tüm elementleri seçme
    cy.get("div h2").then(($elements) => {
      // Seçilen elementlerin sayısını kontrol etme
      expect($elements.length).to.be.at.least(1);

      // Elementlerin listesi
      const elementsList = $elements.toArray();
      // Rastgele bir element seçme
      const randomIndex = Math.floor(Math.random() * elementsList.length);
      const randomElement = elementsList[randomIndex];
      // Seçilen elemente tıklama
      cy.wrap(randomElement).click();
    });
  }
  //answers visibility
  answersVisibility() {
    // "div h2" selector ile tüm elementleri seçme
    cy.get("div h2").then(($elements) => {
      // Seçilen elementlerin sayısını kontrol etme
      expect($elements.length).to.be.at.least(1);

      // Elementlerin listesi
      const elementsList = $elements.toArray();
      // Rastgele bir element seçme
      const randomIndex = Math.floor(Math.random() * elementsList.length);
      const randomElement = elementsList[randomIndex];
      // Seçilen elemente tıklama
      cy.wrap(randomElement)
        .click()
        .then(() => {
          cy.xpath(
            "//div[@class='md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark']"
          ).should("be.visible");
        });
    });
  }

  // visibility of + sign
  visibilityOfPlusSign() {
    // Her bir "div h2" elementinin görünürlüğünü doğrulama
    cy.xpath("//*[name()='svg'][@class='flex-shrink-0 stroke-2']").each(
      ($bar) => {
        cy.wrap($bar).should("be.visible");
      }
    );

    // Number of bars
    cy.xpath("//*[name()='svg'][@class='flex-shrink-0 stroke-2']")
      .its("length")
      .then((visibleBarsCount) => {
        cy.log("Number of plus sign is: " + visibleBarsCount);
      });
  }
}

export default FAQPage;
