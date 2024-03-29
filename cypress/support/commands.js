import 'cypress-file-upload';
import "@cypress-audit/lighthouse/commands";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add("openWomenTab", () => {
    cy.visit("https://magento.softwaretestingboard.com/women.html")
})
Cypress.Commands.add("searchPhrase", (text, delayValue) => {
    cy.get("#search").type( text, {delay: delayValue});
})
Cypress.Commands.add("login", (email, password) => {
    cy.intercept("POST","https://api.realworld.io/api/users/login").as("requestLogin")
    cy.get('[placeholder="Email"]').clear();
    cy.get('[type="password"]').clear();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
