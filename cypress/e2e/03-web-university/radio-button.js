describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#dropdown-checkboxes-radiobuttons')

        // cy.get('#radio-buttons').find("[type='radio']").first().check()
        // cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
        cy.checkRadioButtonByVal('orange').should('be.checked')
    })

    it.only('Validate the state of Specific radio buttons ', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#dropdown-checkboxes-radiobuttons')

        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="pumpkin"]').should('be.checked')
        cy.get('input[value="cabbage"]').should('be.disabled')
    })
})