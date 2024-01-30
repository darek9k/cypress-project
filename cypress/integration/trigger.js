/// <reference types="cypress" />

describe("E2E - scroll/hover", () => {
    it("Hover", () => {
       cy.visit("/");
       cy.get("#ui-id-6").trigger("mouseover");
      //const gearElement = cy.contains('Gear');
      //gearElement.trigger("focus");
       cy.get("#ui-id-25").click();
    })

    it("Scrollin", () => {
        cy.get("#block-compare-heading").scrollIntoView();
    }
        )
})