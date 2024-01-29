/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    it("Locators", () => {
        cy.visit("/")

        //after the marker
         cy.get("a");

        //after Id
        cy.get("#search");

        //After class
        cy.get(".input-text")

        //Attributes
        cy.get('[name="q"]')

        //A more precise attribute with a tag
        cy.get('input[name="q"]');

        //After many attributes
        cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-orange_main_2.jpg"][max-height="300"]');

        //Recommended practice for downloading items via Cypress
        cy.get('[data-cy="rearch"]');

    })
    it.only("Locators part 2", () => {
        cy.visit("/")
        cy.contains("Shop New Yoga")    
        cy.contains('[class="action more button"]', 'Shop New Yoga')
        cy.visit("/women.html")
        cy.get("li").parent('[class="items"]').parent('[class="categories-menu"]').find("li").eq(0)

        cy.get("li").parent('[class="items"]').parent('[class="categories-menu"]').find("li").contains("Hoodies & Sweatshirts")

    })
})