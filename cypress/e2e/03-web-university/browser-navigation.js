describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#contact-us')
        cy.url().should("include", "/Contact-Us/contactus")

        cy.go('back')
        cy.reload()
        cy.url().should("include", "http://www.webdriveruniversity.com")

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should("include", "/To-Do-List/index")
        cy.go(-1)
        cy.url().should("include", "http://www.webdriveruniversity.com")
    })
})