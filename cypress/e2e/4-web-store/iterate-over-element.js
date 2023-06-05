describe("Verifying iterating over elements", () => {
    beforeEach(() => {
        cy.selectMenuItem("Hair Care")
    })

    it("Log information about Hair Care page products", () => {
        const products = [
            'Seaweed Conditioner',
            'Eau Parfumee au The Vert Shampoo',
            'Pantene Pro-V Conditioner, Classic Care',
            'Curls to straight Shampoo'
        ]

        cy.get('.fixed_wrapper .prdocutname').each((element, index, $list) => {
            if (products.includes(element.text())) {
                cy.log('Index is: ' + index + '. Name is: ' + element.text())
            } else {
                cy.log('not found')
            }
        })
    })

    it('Add specific product to basket ',  () => {
        cy.selectProduct('.fixed_wrapper .prdocutname', 'Seaweed Conditioner')
    })

    it('Add another specific product to basket ',  () => {
        cy.selectProduct('.fixed_wrapper .prdocutname', 'Curls to straight Shampoo')
    })
})