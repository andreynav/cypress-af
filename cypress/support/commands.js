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

Cypress.Commands.add('selectProduct', (selector, productName) => {
    cy.get(selector).each((el) => {
        if (el.text().includes(productName)) {
            cy.wrap(el).click()
        }
    })
})

Cypress.Commands.add('addProductToBasket', (selector, productName) => {
    cy.get(selector).each((el, index) => {
        if (el.text().includes(productName)) {
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add('selectMenuItem', (itemName) => {
    cy.visit(Cypress.env('web_store'))
    cy.get("a[href*='product/category&path=']").contains(itemName).click()
})

Cypress.Commands.add('submitForm', (firstName, lastName, email, body, sel, message) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(body)
    cy.get('[type="submit"]').click()
    cy.get(sel).contains(message)
})
