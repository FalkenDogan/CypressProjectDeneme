//describe, cy.visit, cy.url, cy.go

//kodu çalıştırırken ilk yapılack : terminalde  npx cypress open   deyip burdan yürüyeceğiz.

//it.only koyunca sadece describe içindeki sadece o it çalışacak
//describe kısmına only eklenirse sadece o çalışır.

//aşağıdaki kod satırı kullanılabilecek seçenekleri otomatik olarak çağırır  ///<reference types="cypress"/>

describe("Temel Komutlarlogin islemi", () => {
  it("cy.visit, cy.url, cy.go", () => {
    //navigasyonla bir siteye gitme için cy.visit kullanılacak.
    cy.visit("/"); //base url atandıysa sadece bu şekilde kullanılabilir.
    cy.visit("https://www.google.com"); //base url atanmadıysa bu şekilde kullanılabilir
    cy.visit({
      url: "/example/pages1/exaple.html",
      method: "GET",
      //baseUrl atandıysa usl kımsına -/ sonrasi link yazilir. Medhoda göre işlemler yaptirilir.
    });

    cy.visit("/"); //burada bazı test aşamaları yapıldı.
    //bu aşamadan sonra başka bir siteye de geçiş yapılabilir. ama tavsiye edilmez
    //   cy.visit('https://example.com') //daha sonra bu siteye gidildi. bu yapılabilir ama yapılmamalı.

    cy.visit("https://example.com");

    //cy.url() doğrulama, assertion yapıyor.
    cy.url().should("eq", "https://example.com"); //eq kullanımı: burada tam eşitlik söz konusu,
    cy.url().should("include", "https://example.com"); //include : burada içerik kontrolü söz konusu,

    //cy.go() kullanımı:
    cy.go("back");
    //veya
    cy.go(-1);

    cy.go("forward");
    cy.go(1);
  });

  it("cy.get, cy.contains, .find", () => {
    //cy.get kullanımı
    //cy.get içine xpath eklenemez! //cy.xpath için terminalden onu yüklemek gerekir
    cy.get(".classAdi");
    cy.get("#id");
    cy.get("div> li > ul ");
    cy.get('[data-id ="testId"]');
    cy.get("div.classAdi #id");
    //alias çok tekrar edilen şeyi as. deyip ailas yapıyoruz.sonra @ deyip çağırıyoruz.
    cy.get(".classAdi").as("prices");
    cy.get("@prices");
    //cy.get tek başına çalışmaz. ardına .click, .type gibi şeyler yapılmalı.

    cy.get("testId").click;
    //cy.contains belirli bir metni seçen elementi seçer

    cy.contains("login");
    //.contains assertion için kullanılır. cy.contains birbiriden farklı.

    cy.contains("Login").click(); //sayfada login yazan elementi bulur tıklar.
    cy.get("#testId").contains("login").click(); //sayfada ıd'si testId olup içinde login texti olan elementi bulup tıklar

    //aynı locate hem css sellectorlerle hem de containsle alınabilir.
    cy.get(".nav li h1 ").click(); //.nav classinda li içerisinde l1'i bullur ve tıklar.
    cy.get(".nav").contains("About").click(); //.nav classinda About içeren kelimeyi bulur ve tıklar.

    //.find kullanımı. bir element içindeki alt elementi bulmak için kullanılır.
    //cy.get'den sonra kullanılır.
    cy.get("#parent").find("li").find(".first");
    //bu syntax aşağıdaki gibi de oluşturulabilir
    cy.get("#parent li .first");
  });

  it(".click, .type, .clear ", () => {
    // .click
    cy.get("submitBtn").click(); //doğru clik kullanımı
    cy.contains("Submit").click();
    cy.contains("img").click("topRight");
    cy.contains("img").click("15, 40");
    cy.contains("#InputUsername").click();

    //.type kullanımı
    cy.contains("#inputName").type("testUser");
    cy.contains("#inputPassword").type("PASSWORD{enter}"); //entere tıklar
    cy.contains("#inputPassword").type("{enter}");

    cy.get("#comments").type("uzun cümleler, 250 kelime", { delay: 0 }); //yazım için vakit kaybettirmeyecek 0 sn vakit harcayacak

    //.clear kullanimi
    cy.get("#inputName").type("testUser");
    cy.get("#inputName").clear(); //testUser'i sildi

    cy.get("#comments").type("uzun cümleler, 250 kelime", { delay: 0 });
    //assertion yapıldı.
    cy.get("#comments").clear();
  });

  it(".should kullanimi", () => {
    cy.get("#comments").should("be.visible");
    cy.get("#comments").should("be.visible").and("include", "Giris");
    //hem comments'in görünür olup olmadığını hem de giriş içerip içermediğini kontrol ettirdik.

    cy.get("#comments").should("be.visible").and("contains", "Giris");
    //hem comments'in görünür olup olmadığını hem de giriş içerip içermediğini kontrol ettirdik.

    cy.get("#comments").should("be.visible").and("eq", "Giris"); //hem görünürlüğü hem de değişkenin adı girişmi kontrol et.

    cy.get("input").should("be.empty");
    cy.get("input").should("not.have.value");
    cy.get("input").should("have.css", "font-family").and("match", /serif/); //hem görünürlüğü hem de değişkenin adı girişmi kontrol et.
    cy.get(".classExample").should("not.be.empty");

    cy.get(".classExample").should("length", 3);
  });

  //cy.wait(): kullanımı

  it("cy.wait", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#comments", { timeout: 12000 }).should("be.visible").click();
  });

  it("önemli bazı komutlar", () => {
    //cy.title
    cy.title.should("eq", "Sayfanin basliği");
    cy.title.should("include", "Sayfanin basliği");

    //cy.log() //testin akışı sırasını izlemek, consolda yazdırmak için kullanılır
    cy.visit("/");
    cy.log("Sayfaya yönlendirildi");
    cy.get(".nav").find("li").contains("About").click();
    cy.log("About açıldı");

    //cy.screenshot()
    cy.screenshot(); //sayfanın tamamının ekran görüntüsünü alır
    cy.get(".nav").find("li").contains("About").screenshot();
    cy.screenshot(".login/basarililogin/");

    //cy.viewport
    cy.viewport(1200, 800);
    cy.viewport("iphone-xr");
    //eğer viewport'u tüm testler için otomatik olarak belirlemek istiyorsak. bunu cypress.config.js'in içine koymalıyız.
  });
});

describe.only("Temel komutlar dersimizin örnek testi", () => {
  it("Dersimizin örnek testleri", () => {
    cy.visit("https://demoqa.com");
    cy.url().should("eq", "https://demoqa.com/");
    cy.title().should("eq", "DEMOQA");

    //cy.get(".card-up").find().click();
    cy.get(".card-up.mt-4.top-card")
      .find(".card-body")
      .find("h5")
      .contains("Elements")
      .click(); //yöntem1
    //cy.get(".card-up.mt-4.top-card .card-body h5").contains().click(); //yöntem2
    // cy.contains("Elements").click(); //yöntem3
  });
});
