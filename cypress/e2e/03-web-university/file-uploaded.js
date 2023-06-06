describe('Test File Upload via webdriveruni', () => {
    before(() => {
        cy.visit("/")
        cy.openPageInCurrentTab('#file-upload')
    })

    it('Upload a file....', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('#submit-button').click().then(() => {
            expect(stub).to.be.calledWith('Your file has now been uploaded!')
        })
    })

    it('Upload No file...', () => {
        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('#submit-button').click().then(() => {
            expect(stub).to.be.calledWith('You need to select a file to upload!')
        })
    })
})