/// <reference types="cypress" />

import AlertPage from "../support/page-object/alertPage";

describe("E2E - Alert actions", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText("Przykładowa treść alertu");
        
        // cy.get("#alert").click();
        // cy.on("window:alert", text => {
        //     expect(text).to.equal("Przykładowa treść alertu")
        // })
    })
    it("Alert confirm", () => {
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfrimText();
        AlertPage.rejectAlert();
        // cy.get("#alert-confirm").click();
        // cy.on("window:confirm", text => {
        //     expect(text).to.equal("Zaakceptuj aby kontynuować!")
        // })
        // cy.on("windows.confirm", () => false)
    })
})