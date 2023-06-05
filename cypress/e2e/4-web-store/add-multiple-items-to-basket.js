describe("Add multiple items to basket", () => {
    before(function () {
        cy.fixture("products").as("productData")
    })

    beforeEach(function () {
        cy.selectMenuItem("Hair Care")
    })

    it("Add specific items to basket", () => {
        cy.get('@productData').then(({productData}) => {
            productData.forEach((name) => {
                cy.addProductToBasket('.fixed_wrapper .prdocutname', name)
            })
            cy.get('.cart_total').scrollIntoView().contains('$46.45')
        })
    })
})