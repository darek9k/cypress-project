/// <reference types="cypress" />

describe("E2E - Click on checkbox", () => {
    it("Checkbox", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        cy.get("#checkboxes").find("input").then(checkbox => {
            cy.get(checkbox).eq(0).invoke("prop", "checked").then(checked => {
                if(checked==false) {
                    cy.get(checkbox).eq(0).check();
                    cy.log("Was not checked")
                } else if(checked==true)
                {
                    cy.log("Was checked")
                }
                
            })
            cy.get(checkbox).eq(1).invoke("prop", "checked").then(checked => {
                if(checked==false) {
                    cy.get(checkbox).eq(0).check();
                    cy.log("Was not checked")
                } else if(checked==true)
                {
                    cy.log("Was checked")
                }
            })
        })
    })
})