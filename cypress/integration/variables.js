/// <reference types="cypress" />

describe("E2E - variables", () => {
    it("Variables", () => {
        cy.visit(Cypress.env("url"))
    })
})