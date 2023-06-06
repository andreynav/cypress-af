describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.openPageInCurrentTab('#autocomplete-textfield')
    })

    it("Select specific product Avacado from the autocomplete list", () => {
        cy.get('#myInput').type("A")
        cy.selectAutoCompleteOption('#myInputautocomplete-list > div', '#submit-button', 'Avacado')
    })

    it("Select specific product Grapes from the autocomplete list", () => {
        cy.get('#myInput').type("g")
        cy.selectAutoCompleteOption('#myInputautocomplete-list > div', '#submit-button', 'Grapes')
    })
})