/// <reference types= "cypress" />
// temel komutlari kullanirken onerilerde bulunmasi ve nasil kullanildigini gostermesi icin en basa yazilir.
// .skip yazilirsa describe yada it bloguna o blok atlanir, teste dahil edilmez
// .only yazilirsa describe yada it bloguna sadece o blok calisir, ve testte o blogun calistigi goruntulenir.
describe.skip("Temel Komutlar", () => {
  it("cy.visit, cy.url, cy.go", () => {
    // cy.visit kullanimi
    cy.visit("/"); //baseUrl atandiysa sadece bu sekilde kullanilabilir.
    cy.visit("https://www.google.com"); //baseUrl atanmadiysa bu sekilde kullanilabilir
    cy.visit({
      url: "/example/pages1/example.html",
      method: "GET",
    }); // baseUrl atandiysa url kismina / sonrasi link yazilir. methoda gore islemler yaptirilir.
    cy.visit("https:///www.example.com");
    // burada bazi test asamalari yapildi
    cy.visit("https:///www.example.com/pages2/test/doc"); //daha sonra bu siteye gidildi.
    //burada bazi test asamalari yapilabilir. NOT: Saglikli olmaz, tavsiye etmiyorum.
    //cy.url kullanimi
    cy.visit("https://www.example.com");
    cy.url().should("eq", "https://www.example.com"); // burada tam esitlik soz konusu. eq kullanilirsa
    cy.url().should("include", "example.com"); // burada tam exanple.com iceriyorsa url'de dogrulama tamamlanir. include kullanilirsa
    //cy.go kullanimi
    cy.go("back");
    cy.go(-1);
    cy.go("forward");
    cy.go(1);
  });
  it("cy.get, cy.contains, .find", () => {
    //cy.get kullanimi
    //cy.get icerisine sadece xpath ekleyemiyoruz.
    //cy.get() sonrasinda mutlaka bir islem yaptirilmali, aksi halde bir artisi olmayacaktir.
    cy.get(".classAdi");
    cy.get("#id");
    cy.get("div > li > ul");
    cy.get('[data-id="testId"]');
    cy.get("div.classAdi #id");
    cy.get(".classAdi2").as("prices");
    cy.get("@prices");
    cy.get("#testId");
    //cy.contains kullanimi
    cy.contains("Login").click(); //sayfa icerisinde Login kelimesini bulur ve tiklar. NOT: birden fazla Login kelimesi varsa problem yasanabilir.
    cy.get("#testId").contains("Login").click(); //testId id'si icerisinde Login kelimesini iceren kismi bulur ve tiklar.
    cy.get(".nav li h1").click(); //.nav class'inda li icersinde h1'i bulur ve tiklar.
    cy.get(".nav").contains("Contact").click(); //.nav class'i icerisinde Contact iceren kelimeyi bulur ve tiklar.
    // .find Kullanimi
    cy.get("#parent").find("li").find(".first");
    cy.get("#parent li .first");
  });
  it(".click, .type, .clear", () => {
    // .click kullanimi
    cy.click(); //yanlis kullanim, hata verir asla denemeyiniz. :)
    cy.get("submitBtn").click(); // dogru click kullanimidir.
    cy.contains("Submit").click();
    cy.get("img").click("topRight");
    cy.get("img").click(15, 40);
    cy.get("#inputUsername").click();
    // .type kullanimi
    cy.get("#inputName").type("testUser");
    cy.get("#password").type("abc123{enter}");
    cy.get(".testClass").type("{enter}");
    cy.get("#comments").type("uzun cumleler, 250 kelime", { delay: 0 });
    // .clear kullanimi
    cy.get(".nav").clear(); // bu bir yanlis kullanimdir.
    cy.get("#inputName").type("testUser");
    cy.get("#inputName").clear();
    cy.get("#inputName").type("testUser2");
    cy.get("#inputName").clear();
    cy.get("#comments").type("uzun cumleler, 250 kelime", { delay: 0 });
    // assertion yapildi
    cy.get("#comments").clear();
  });
  it(".should", () => {
    // .should kullanimi
    cy.get("#submitBtn").should("be.visible").and("include", "Giris");
    // birincisi #submitBtn'un dogrulanmasi ve ardindan butonun isminin Giris iceren kelimenin oldugunun dogrulanmasi
    // include kullanilirsa kelimenin icerilmesi yeterli.
    cy.get("#submitBtn").should("be.visible").and("contains", "Giris");
    // birincisi #submitBtn'un dogrulanmasi ve ardindan butonun isminin Giris iceren kelimenin oldugunun dogrulanmasi
    // contain yada contains kullanilirsa kelimenin icerilmesi yeterli.
    cy.get("#submitBtn").should("be.visible").and("eq", "Login");
    // birincisi #submitBtn'un dogrulanmasi ve ardindan butonun isminin Giris kelimesini dogrulayacak.
    //eq kullanilacaksa yuzde yuz esitlik olmali
    cy.get("input").should("be.empty");
    cy.get("input").should("not.have.value", "Jane");
    cy.contains("Login").should("be.visible");
    cy.get("header").should("have.css", "font-family").and("match", /serif/);
    cy.get(".classExample").should("not.be.empty");
    cy.get("#testID").should("have.length", 3);
  });
  it("cy.wait", () => {
    //cy.wait() kullanimi
    cy.visit("/");
    cy.wait(1000);
    cy.get(".list>li", { timeout: 10000 }).should("be.visible").click();
    cy.get("#id").should("be.visible");
  });
  it("Onemli Bazi Komutlar", () => {
    //cy.title()
    cy.title().should("eq", "Sayfanin basligi");
    cy.title().should("include", "Sayfanin");
    //cy.log()
    cy.visit("/");
    cy.log("sayfaya yonlendirildi");
    cy.get(".nav").find("li").contains("About").click();
    cy.log("About acildi");
    //cy.screenshot()
    cy.screenshot();
    cy.get(".post").screenshot();
    cy.screenshot("../login/basariliLogin/");
    // cy.viewport()
    cy.viewport(1000, 1000);
    cy.viewport(500, 700);
    cy.viewport("samsung-s10");
  });
});
describe("Temel Komutlar Dersimizin Ornek Testi", () => {
  it("Dersimizin Ornek Testi", () => {
    cy.viewport(1500, 1500);
    cy.visit("https://demoqa.com/");
    cy.url().should("eq", "https://demoqa.com/");
    cy.log("url dogrulandi");
    cy.title().should("eq", "DEMOQA");
    cy.log("title dogrulandi");
    // cy.get('.card.mt-4.top-card').find('.card-body').find('h5').contains('Elements').click() //yontem1
    cy.get(".card.mt-4.top-card .card-body h5").contains("Elements").click(); //yontem2
    // cy.contains('Elements').click()//yontem3
    cy.go(-1);
    cy.log("bir onceki sayfaya geri donuldu");
    cy.go(1);
    cy.log("bir sonraki sayfaya gidildi");
    cy.wait(1000);
    cy.get(".accordion").should("be.visible");
    cy.screenshot();
  });
});
