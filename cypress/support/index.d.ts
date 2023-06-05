/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Select radio-button by the certain value and check it
         * @example cy.checkRadioButtonByVal('blue')
         */

        checkRadioButtonByVal(value: string): Chainable<JQuery<HTMLElement>>
        /**
         * Open a page in current browser tab instead of "target=_blank"
         * @example cy.openPageInCurrentTab('#dropdown-checkboxes')
         */
        openPageInCurrentTab(selector: string): Chainable<JQuery<HTMLElement>>

        /**
         * Open a page in current browser tab instead of "target=_blank"
         * @example cy.selectAutoCompleteOption('#dropdown-checkboxes')
         */
        selectAutoCompleteOption(inputSel: string, submitSel: string, optionName: string): Chainable<JQuery<HTMLElement>>

        /**
         * Select specific product by a name
         * @example cy.selectProduct('.fixed_wrapper .prdocutname', 'Seaweed Conditioner')
         */
        selectProduct(selector: string, productName: string): Chainable<JQuery<HTMLElement>>

        /**
         * Select specific menu item by a name
         * @example cy.selectMenuItem("Hair Care")
         */
        selectMenuItem(itemName: string): Chainable<JQuery<HTMLElement>>

        /**
         * Submit form with user credentials
         * @example cy.submitForm(first_name, last_name, email, body, 'body', error_response)
         */
        submitForm(firstName: string, lastName: string, email: string, body: string, sel: string, message: string): Chainable<JQuery<HTMLElement>>

        /**
         * Select specific product by a name
         * @example cy.addProductToBasket('.fixed_wrapper .prdocutname', 'Seaweed Conditioner')
         */
        addProductToBasket(selector: string, productName: string): Chainable<JQuery<HTMLElement>>
    }
}