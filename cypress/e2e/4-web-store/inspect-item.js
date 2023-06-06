describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item text", () => {
        cy.visit(Cypress.env('web_store'))
        // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick', { matchCase: true }).click()
        cy.get('.fixed_wrapper').find('a').eq(0).click()
        cy.log('dddsss')
    });

})