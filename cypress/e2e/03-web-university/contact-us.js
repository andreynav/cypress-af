import { home } from "../../pages/webUni/Home"
import { contactUs } from "../../pages/webUni/ContactUs"

describe("Test Contact Us form via WebdriverUniversity", () => {
    beforeEach(function() {
        home.visit()
        home.clickContactUsSection()
        cy.fixture('webUni/contact-us.json').as('userData')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", function() {
        cy.get('@userData').then(({ last_name, comment }) => {
            contactUs.submitForm(Cypress.env('first_name'),last_name, '', comment)
            contactUs.verifySubmitError()
        })
    })

    it("Should be able open form on the same browser tab and submit a successful submission via contact us form", function() {
        cy.get('@userData').then(({ first_name, last_name, email, comment }) => {
            contactUs.submitForm(first_name, last_name, email, comment)
            contactUs.verifySubmitSuccess()
        })
    })
})

