class Home {
    contactUsButtonLocator = '#contact-us'

    visit() {
        cy.visit(Cypress.env('web_university'))
    }

    clickContactUsSection() {
        cy.get(this.contactUsButtonLocator)
            .invoke('removeAttr', 'target')
            .click({force: true})
    }
}

export const home = new Home()