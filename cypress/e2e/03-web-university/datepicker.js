describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("/")
        cy.openPageInCurrentTab('#datepicker')
        cy.get('#datepicker').click()

        function fixDigit(val){
            return val.toString().length === 1 ? "0" + val : val
        }

        let date = new Date()

        let futureYear = (date.getFullYear() + 1).toString()
        let futureMonth = date.toLocaleString('en-us', { month: 'long' })
        let futureMonthDigits = date.toLocaleString('en-us', { month: '2-digit' })
        let futureDay = (date.getDate() + 1).toString()
        let futureDayDigits = fixDigit(date.getDate() + 1)
        cy.log(futureYear, futureMonth, futureDay)

        const selectMonthAndYear = (  ) => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        const selectFutureDay = ( ) => {
            cy.get('[class="day"]').contains(futureDay).should('have.text', futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()

        cy.get('.form-control').should('have.value', `${futureMonthDigits}-${futureDayDigits}-${futureYear}`) //'06-05-2024'
    })
})