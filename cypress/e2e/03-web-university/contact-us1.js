describe("Test Contact Us form via WebdriverUniversity", () => {
    beforeEach(function () {
        /**
         * @param {{first_name:string, last_name:string, email:string, body:string, success_response:string,
         * success_url:string, error_response:string}} data
         */
        cy.visit("/")
        cy.openPageInCurrentTab('#contact-us')
        cy.fixture('webUni/contact-us').then(function (data) {
            this.data = data
        })
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", function () {
        cy.submitForm(Cypress.env('first_name'),
            this.data.last_name,
            ' ',
            this.data.comment,
            'body',
            this.data.error_response)
    })

    it("Should be able open form on the same browser tab and submit a successful submission via contact us form", function () {
        cy.submitForm(this.data.first_name,
            this.data.last_name,
            this.data.email,
            this.data.comment,
            '#contact_reply > h1',
            this.data.success_response)
        cy.url().should("include", this.data.success_url)
    })
})

