/// <reference types="cypress" />

describe("E2E - Click on checkbox", () => {
    it("Checkbox", () => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation");
        cy.get('[class="et_pb_blurb_description"]').find("input").then(checkbox => {
            cy.get(checkbox).eq(1);
            cy.get(checkbox).eq(2);
            cy.get(checkbox).eq(0).check().invoke("prop", "checked").then(status => {
                cy.log(status)
            })
            
        })
        
        cy.get('[value="Bike"]').check().invoke("prop", "checked").then(checked => {
            cy.log(checked)
        })
        cy.get('[value="Car"]').check().invoke("prop", "checked").then(checked => {
            cy.log(checked)
        })
    })
})