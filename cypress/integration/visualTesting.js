/// <reference types="cypress" />

describe("Visual Regression", () => {
    it("Loading an item", () => {
        cy.visit("https://picsum.photos/");
        cy.get('header.content-section-light').then(image => {
            cy.wrap(image).toMatchImageSnapshot();
        })
        cy.percySnapshot();
    })
})