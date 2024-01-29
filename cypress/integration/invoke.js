/// <reference types="cypress" />

describe("E2E - Invoke Metod", () => {
    it("Invoke", () => {
        cy.visit("/");

        // /Retrieving the value of a given elementn
        cy.get("#ui-id-8").invoke("text").then(text => {
            cy.log(text)
        })

        //Accessing the value of an attribute
        cy.get("#ui-id-8").invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get("#ui-id-8").invoke("attr", "role").then(role => {
            cy.log(role)
        })

        //Getting values
        cy.get("#search").type("Sample value").invoke("prop", "value").then(value => {
            cy.log(value)
        })
        })
    })