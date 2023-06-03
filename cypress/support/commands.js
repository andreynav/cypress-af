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

Cypress.Commands.add("checkRadioButtonByVal", (value) => {
    cy.get('#radio-buttons').find(`input[value="${value}"]`).check()
})

Cypress.Commands.add('openPageInCurrentTab', (selector) => {
    cy.get(selector).invoke('removeAttr', 'target').click({force: true})
})

Cypress.Commands.add('selectAutoCompleteOption', (inputSel, submitSel, optionName) => {
    cy.get(inputSel).each((el) => {
        const elementText = el.text()
        const elToSelect = optionName

        if (elementText === elToSelect) {
            // cy.wrap(el).click()
            el.trigger('click')
            cy.get(submitSel).click()
            cy.url().should('include', elToSelect)
        }
    })
})