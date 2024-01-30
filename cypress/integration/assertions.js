/// <reference types="cypress" />

describe("E2E - Assertions", () => {
    it("Assertions expect and should", () => {
        cy.visit("/");
        
        //Text verification
        cy.get("#ui-id-3 span").should("contain", "What's New");
        cy.get("#ui-id-3 span").then(tab => {
            expect(tab).to.contain("What's")
        })

        //Does not contain
        cy.get("#ui-id-3 span").should("not.contain", "blablas")

        cy.get("#ui-id-3 span").then(tab => {
            expect(tab).not.to.contain("blablas")
        })

        //Whether the tag has a class
        cy.get("#search").should("have.class", "input-text")
        cy.get("#search").then(search => {
            expect(search).to.have.class("input-text")
        })

        //Is it visible?
        cy.get("#search").should("be.visible");

        cy.get("#search").then(search => {
            expect(search).to.be.visible
        })

        //Verification of the number of elements
        cy.get("ul.ui-menu").find("li").should("have.length", 26)

        cy.get("ul.ui-menu").find("li").then(tabs => {
            expect(tabs).to.have.length(26)
        })

        //Verification of the css value of a given element
        cy.get("#search").should("have.css", "height", "32px")

        cy.get("#search").then(search => {
            expect(search).to.have.css("height", "32px")
        })
    })
})