describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#file-upload')
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('#submit-button').click().then(() => {
            expect(stub).to.be.calledWith('Your file has now been uploaded!')
        })
    })

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.openPageInCurrentTab('#file-upload')

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.get('#submit-button').click().then(() => {
            expect(stub).to.be.calledWith('You need to select a file to upload!')
        })
    })
})