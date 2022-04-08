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
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.fixture('user').then(userContent => {
        console.log('using command to login');
        cy.clearCookies();
        cy.clearLocalStorage('')
        cy.get('#user_login').type(userContent.username)
        cy.get('#user_password').type(userContent.password)
        cy.log(userContent.username)
        cy.log(userContent.password)
        cy.get('#user_remember_me').click()
        cy.wait(3000)
        cy.contains('Sign in').click()
    })
})
