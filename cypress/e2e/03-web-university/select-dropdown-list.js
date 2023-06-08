describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("/")
        cy.openPageInCurrentTab('#dropdown-checkboxes-radiobuttons')

        cy.get('#dropdowm-menu-1').select('Python').contains( 'Python1') // text
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit') // value
        cy.get('#dropdowm-menu-3').select('JavaScript').should('have.value', 'javascript') // value

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })
})