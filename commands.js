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
import "cypress-localstorage-commands"

Cypress.Commands.add('login',(userName,passWord) => {
     cy.get('#userName').type(userName)
     cy.get('#password').type(passWord)
     cy.get('#loginButton > span.MuiButton-label').click();  
});

Cypress.Commands.add('searchFiled',(txtPatientName,patientName) =>{
    cy.get(txtPatientName).type(patientName)
})