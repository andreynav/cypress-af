describe("Verifying iterating over elements", () => {
    it("Log information about Hair Care page products", () => {
        const products = [
            'Seaweed Conditioner',
            'Eau Parfumee au The Vert Shampoo',
            'Pantene Pro-V Conditioner, Classic Care',
            'Curls to straight Shampoo'
        ]

        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each((element, index, $list) => {
            if (products.includes(element.text())) {
                cy.log('Index is: ' + index + '. Name is: ' + element.text())
            } else {
                cy.log('not found')
            }
        })
    })

    it('Add specific product to basket ',  () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each((element, index, $list) => {
            if (element.text().includes('Seaweed Conditioner')) {
                cy.wrap(element).click()
            }
        })
    });
})