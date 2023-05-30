describe("Test Contact Us form via WebdriverUniversity", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aaa")
        cy.get('[name="last_name"]').type("bbb")
        cy.get('[name="email"]').type("aaa@gmail.com")
        cy.get('textarea.feedback-input').type("test comment")
        cy.get('[type="submit"]').click().then(() => {
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq("/Contact-Us/contact-form-thank-you.html")
            })
        })
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aaa")
        cy.get('[name="last_name"]').type("bbb")
        cy.get('[name="email"]').type("aaa@gmail.com")
        cy.get('[type="submit"]').click().then(() => {
            cy.get('body').should('contain', 'Error: all fields are required')
        })
    })
})

