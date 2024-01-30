class AlertPage {
    //Locators
    get btnAlert1() {
        return cy.get("#alert");
    }

    get btnAlert2() {
        return cy.get("#alert-confirm");
    }

    clickOnBtnAlert1() {
        this.btnAlert1.click();
    }

    clickOnBtnAlert2() {
        this.btnAlert2.click();
    }
    //With a parameter to be provided when calling the method
    verifyAlertText(contents) {
        cy.on("window:alert", text => {
            expect(text).to.equal(contents)
        })
    }

    verifyAlertConfrimText() {
        cy.on("window:confirm", text => {
            expect(text).to.equal("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert() {
        cy.on("windows.confirm", () => false)
    }

    acceptAlert() {
        cy.on("windows.confirm", () => true)
    }
}

export default new AlertPage();