/// <reference types="cypress" />

describe("E2E - API Tests", () => {
    it("Tag verification", () => {
        cy.intercept("GET","https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angularjs.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("exercitationem").and.to.contain("consequatur")
        })
    })
    it("Incorrect login", () => {
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("absd@efgh.ijk", "1234");
    })
})