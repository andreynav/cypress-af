describe("Verifying element alias", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('web_store'))
    })

    it('Validate a specific hair care product',  () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productName')
        cy.get('@productName').should('contain', 'Seaweed Conditioner')
        cy.get('@productName').its("length").should("be.gt", 5)
    })

    it('Validate the number of products on home page',  () => {
        cy.get('.thumbnail')
            .as('productName')
            .should('have.length', 16)
        cy.get('@productName')
            .find('a[title="Add to Cart"]')
            .invoke('attr', 'title')
            .should('eq', 'Add to Cart')
    })

    it('Calculate prise of normal products',  () => {
        let totalPrice = 0
        const parseAmount = (amountString) => {
            const cleanedString = amountString.replace(/\$|\s/g, '');
            return parseFloat(cleanedString);
        }

        cy.get('.thumbnail').as('productCard')
        cy.get('@productCard').find('.oneprice').each((element) => {
            cy.log('Element price: ' + parseAmount(element.text()))
            totalPrice += parseAmount(element.text())
            cy.log('Total price: ' + totalPrice)
        }).then(res => {
            cy.log(totalPrice)
        })
    })

    it.only('Calculate prise of normal and sale products',  () => {
        let totalPrice = 0
        const parseAmount = (amountString) => {
            return parseFloat(amountString.replace(/\$|\s/g, ''))
        }

        cy.get('.thumbnail').each((productCard) => {
            const priceElement = productCard.find('.oneprice').length > 0 ? '.oneprice' : '.pricenew'
            const currentPrice = parseAmount(productCard.find(priceElement).text())

            cy.log('Element price: ' + currentPrice)
            totalPrice += currentPrice
        }).then(() => {
            expect(totalPrice).to.equal(656.5)
        })
    })
})