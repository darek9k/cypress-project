/// <reference types="cypress" />

describe("E2E - Uploading a file", () => {
    it("Uploading a file", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("../fixtures/test.png");
        cy.get("#file-upload").invoke("prop", "value")
        .then(value => {
            cy.log(value)
            cy.wrap(value).should("contain", "test.png") 
        })     
        cy.get("#file-submit").click();
        cy.get("#uploaded-files").invoke("text").then(text => {
            cy.wrap(text).should("contain", "test.png")
        })
    })
})