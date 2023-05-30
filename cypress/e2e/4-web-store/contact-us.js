describe("Test Contact Us form via web store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("aaa")
        cy.get('#ContactUsFrm_email').type("aaa@gmail.com")
        cy.get('//textarea[@id="ContactUsFrm_enquiry"]').type("test comment")
        cy.get('button[title="Submit"]').click().then(() => {
            cy.get('.mb40 > :nth-child(3)').should('contain', 'Your enquiry has been successfully sent to the store owner!')
            cy.location().should((loc) => {
                expect(loc.search).to.equal("?rt=content/contact/success")
            })
        })
    })

})