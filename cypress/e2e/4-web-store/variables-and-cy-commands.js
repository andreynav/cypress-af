describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
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
    })
})