/// <reference types="cypress" />

describe("E2E - Alert actions", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");

        cy.get("#alert").click();
        cy.on("window:alert", text => {
            expect(text).to.equal("Przykładowa treść alertu")
        })
    })
    it("Alert confirm", () => {
        cy.get("#alert-confirm").click();
        cy.on("window:confirm", text => {
            expect(text).to.equal("Zaakceptuj aby kontynuować!")
        })
        cy.on("windows.confirm", () => false)
    })
})