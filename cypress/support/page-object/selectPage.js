class SelectPage {
    get select() {
        return cy.get("#sorter")
    }

    selectAllOption() {
       this.select.then(select => {
            cy.wrap(select).find("option").each(option => {
                cy.wrap(option).invoke('text').then(text => {
                    cy.log(text);
                })
            })
        })
    }

}

export default new SelectPage();