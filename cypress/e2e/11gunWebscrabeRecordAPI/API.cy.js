/// <reference types= "cypress" />

describe("Cypress API", () => {
  it("Cypress GET", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/11").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 11);
      }
    );
  });

  it("Cypress GET - 2", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/11",
      body: {
        userId: 2,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 11);
    });
  });

  it("Cypress POST", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("title", "foo");
    });
  });

  it("Cypress POST - 2", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("title", "foo");
    });
  });

  it("Cypress PUT", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "baslik guncellendis",
      body: "body guncellendi",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", "baslik guncellendis");
    });
  });

  it("Cypress DELETE", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});

describe.only("CYPRESS JWT API", () => {
  it("JWT ile Yetkilendirme", () => {
    // JWT(Json Web Token)
    cy.request({
      method: "POST",
      url: "https://example.com/auth/login",
      body: {
        username: "kullaniciAdi@example.com",
        password: "password123",
      },
    }).then((response) => {
      // Yanitiin durum kodunu kontrol etmek
      expect(response.status).to.eq(200);

      //JWT yanit govdesinden alinacak
      const token = response.body.token;

      // Token'in varligini kontrol ediyoruz
      expect(token).to.not.be.empty;

      //JWT ile korumali kaynaga erisim icin GET istegi gonderecegiz
      cy.request({
        method: "GET",
        url: "https://example.com/api/protected/resource/example",
        headers: {
          Authorization: `Bareer ${token}`,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.property("data"); // yanit bodysini kontrol etmek
      });
    });
  });
});
