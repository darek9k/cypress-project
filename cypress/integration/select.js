/// <reference types="cypress" />

import SelectPage from "../support/page-object/selectPage";

describe("E2E - Select option", () => {
    it("Select option", () => {
        cy.visit("https://magento.softwaretestingboard.com/gear/bags.html");

        //byName
        cy.get("#sorter").select("Option 1")

        //byValue
        cy.get("#sorter").select("2")

        //byIndex
        cy.get('#sorter').select(1)
        
    })

    it.only("All Options", () => {
        cy.visit("https://magento.softwaretestingboard.com/gear/bags.html");

        // cy.get("#sorter").then(select => {
        //     cy.wrap(select).find("option").each(option => {
        //         cy.wrap(option).invoke('text').then(text => {
        //             cy.log(text);
        //         })
        //     })
        // })
        SelectPage.selectAllOption();

    })
})