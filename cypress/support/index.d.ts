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
    }
}