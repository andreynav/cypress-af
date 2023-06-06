describe("Test Contact Us form via WebdriverUniversity", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.openPageInCurrentTab('#contact-us')
        cy.fixture('contact-us.json').as('userData')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.get('@userData').then(({first_name, last_name, email, body, error_response}) => {
            cy.submitForm(first_name, last_name, ' ', body, 'body',error_response)
        })
    })

    it("Should be able open form on the same browser tab and submit a successful submission via contact us form", () => {
        cy.get('@userData').then(({first_name, last_name, email, body, success_response, success_url}) => {
            cy.submitForm(first_name, last_name, email, body, '#contact_reply > h1', success_response)
            cy.url().should("include", success_url)
        })
    })
})

