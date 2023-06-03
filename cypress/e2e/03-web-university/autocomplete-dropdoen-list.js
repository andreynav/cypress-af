describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product Avacado from the autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#autocomplete-textfield')

        cy.get('#myInput').type("A")
        cy.selectAutoCompleteOption('#myInputautocomplete-list > div', '#submit-button', 'Avacado')
    })

    it("Select specific product Grapes from the autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#autocomplete-textfield')

        cy.get('#myInput').type("g")
        cy.selectAutoCompleteOption('#myInputautocomplete-list > div', '#submit-button', 'Grapes')
    })
})