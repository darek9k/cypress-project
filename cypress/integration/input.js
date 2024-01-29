/// <reference types="cypress" />

describe("E2E - Entering a value into the field", () => {
    it("Entering a value", () => {
        cy.visit("/");
        cy.get("#search").type("bag {enter}");
        
    })
    it("Cleaning element", () => {
        cy.visit("/");
        cy.get("#search").clear();
    })
 })