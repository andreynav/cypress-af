class ContactUs {
    firstNameInputLocator = '[name="first_name"]'
    lastNameInputLocator = '[name="last_name"]'
    emailInputLocator = '[name="email"]'
    commentTextareaLocator = 'textarea.feedback-input'
    submitButtonLocator = '[type="submit"]'
    successSubmitLocator = '#contact_reply > h1'
    errorSubmitLocator = 'body'
    successSubmitText = 'Thank You for your Message!'
    errorSubmitText = 'Error: Invalid email address'
    successUrl = 'contact-form-thank-you'

    submitForm(firstName, lastName, email, comment) {
        cy.get(this.firstNameInputLocator).type(firstName)
        cy.get(this.lastNameInputLocator).type(lastName)
        cy.get(this.emailInputLocator).type(email)
        cy.get(this.commentTextareaLocator).type(comment)
        cy.get(this.submitButtonLocator).click()
    }

    verifySubmitSuccess() {
        cy.get(this.successSubmitLocator).contains(this.successSubmitText)
        cy.url().should("include", this.successUrl)
    }

    verifySubmitError() {
        cy.get(this.errorSubmitLocator).contains(this.errorSubmitText)
    }

}

export const contactUs = new ContactUs()