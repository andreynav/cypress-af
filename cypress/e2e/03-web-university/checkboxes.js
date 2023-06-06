describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.openPageInCurrentTab('#dropdown-checkboxes-radiobuttons')
    })

    it("Check the first checkbox", () => {
        const checkboxLocator = (index) => {
            return `#checkboxes > label:nth-of-type(${index}) > input`
        }

        cy.get(checkboxLocator(1)).check().should('be.checked')
        // cy.get(checkboxLocator(1)).should('be.checked')
    })

    it("Uncheck the third checkbox", () => {
        cy.get('#checkboxes > label:nth-of-type(3) > input').uncheck().as('thirdCheckbox')
        cy.get('@thirdCheckbox').should('not.be.checked')
    })

    it("Validate all checkboxes", () => {
        cy.get('#checkboxes > label > input').each((el, index) => {
            cy.wrap(el).should(`${[0, 1, 3].includes(index) ? 'not.be.checked' : 'be.checked'}`)
        })
    })

    it("Check all checkboxes", () => {
        // cy.get('input:only-of-type').each((el) => {
        //     cy.wrap(el).check()
        //     cy.wrap(el).should('be.checked')
        // })
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    })
})