describe("Handle js alerts", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#popup-alerts')
    })

    it("Confirm js alert contains the correct text", () => {
        cy.get('#button1').click()
        cy.on('window:alert', (text) => {
            expect(text).to.be.equal('I am an alert box!')
        })
    })

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.get('#confirm-alert-text').should('be.empty')
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })
    })

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.get('#confirm-alert-text').should('be.empty')
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it("Validate js confirm alert box using a stub", () => {
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub).to.be.calledWith('Press a button!')
        }).then(() => {
            return true
        }).then(() => {
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })
    })
})