describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick', { matchCase: true }).click()
        cy.get('.fixed_wrapper').find('a').eq(0).click()
        cy.log('dddsss')
    });

})