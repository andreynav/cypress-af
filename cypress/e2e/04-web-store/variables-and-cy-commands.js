describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit(Cypress.env('web_store'))
        // will fail
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const fragrance = cy.get('a[href*="product/category&path="]').contains('Fragrance')
        // makeupLink.click()
        // fragrance.click()

        // will pass
        const makeupLink1 = cy.get('a[href*="product/category&path="]').contains('Makeup')
        makeupLink1.click()
        const fragrance1 = cy.get('a[href*="product/category&path="]').contains('Fragrance')
        fragrance1.click()

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    })

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit(Cypress.env('web_store') + '/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text()) //jquery text
                cy.log(fnText)
            })
        })
    })
})