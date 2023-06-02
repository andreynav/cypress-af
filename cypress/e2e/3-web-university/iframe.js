describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then(($iframe) => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should('be.visible')
        cy.get('@modal').find('h4').should('contain.text', 'Welcome to')

        cy.get('@modal').contains('button', 'Close').click()
    })
})