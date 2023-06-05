describe("Test Contact Us form via WebdriverUniversity", () => {
    before(function() {
        /**
         * @param {{first_name:string, last_name:string, email:string, body:string, success_response:string,
         * success_url:string, error_response:string}} data
         */
        return cy.fixture('contact-us.json').then((data) => {
            this.data = data
        })
    })

    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#contact-us')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", function() {
        cy.get('[name="first_name"]').type(this.data.first_name)
        cy.get('[name="last_name"]').type(this.data.last_name)
        cy.get('[name="email"]').type(this.data.email)
        cy.get('[type="submit"]').click().then(() => {
            cy.get('body').should('contain', this.data.error_response)
        })
    })

    it("Should be able open form on the same browser tab and submit a successful submission via contact us form", function() {
        cy.get('[name="first_name"]').type(this.data.first_name)
        cy.get('[name="last_name"]').type(this.data.last_name)
        cy.get('[name="email"]').type(this.data.email)
        cy.get('textarea.feedback-input').type(this.data.body)
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply > h1').should("have.text", this.data.success_response)
        cy.url().should("include", this.data.success_url)
    })
})

