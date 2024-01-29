/// <reference types="cypress" />

describe("E2E - Invoke Metod", () => {
    it("Invoke", () => {
        cy.visit("/");
        cy.get("#ui-id-8").invoke("text").then(text => {
            cy.log(text)
        });
    })
})