/// <reference types="cypress" />

describe("E2E - Click actions", () => {
    it("Click on element", () => {
        cy.visit("/");
        cy.get("#ui-id-8").click();
        cy.get('[class="logo"]').click();
    })
})