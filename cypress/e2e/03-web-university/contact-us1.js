describe("Test Contact Us form via WebdriverUniversity", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#contact-us')
        cy.fixture('contact-us.json').as('userData')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.get('@userData').then(({first_name, last_name, email, error_response}) => {
            cy.get('[name="first_name"]').type(first_name)
            cy.get('[name="last_name"]').type(last_name)
            cy.get('[name="email"]').type(email)
            cy.get('[type="submit"]').click().then(() => {
                cy.get('body').should('contain', error_response)
            })
        })
    })

    it("Should be able open form on the same browser tab and submit a successful submission via contact us form", () => {
        cy.get('@userData').then(({first_name, last_name, email, body, success_response, success_url}) => {
            cy.get('[name="first_name"]').type(first_name)
            cy.get('[name="last_name"]').type(last_name)
            cy.get('[name="email"]').type(email)
            cy.get('textarea.feedback-input').type(body)
            cy.get('[type="submit"]').click()
            cy.get('#contact_reply > h1').should("have.text", success_response)
            cy.url().should("include", success_url)
        })
    })
})

