describe("Test Contact Us form via web store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit(Cypress.env('web_store'))
        cy.xpath('//a[contains(@href, "contact")]').click().then((text) => {
            cy.log(`This is the text ${text.text()}`)
        })
        cy.get('#ContactUsFrm_first_name').type("aaa")
        cy.get('#ContactUsFrm_email').type("aaa@gmail.com").should("have.attr", "name", "email")
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("test comment")
        cy.get('button[title="Submit"]').click()
        cy.xpath('//p[contains(text(), "Your enquiry has")]').should("have.text", 'Your enquiry has been successfully sent to the store owner!')
        cy.url().should("include", "/contact/success")
    })

})