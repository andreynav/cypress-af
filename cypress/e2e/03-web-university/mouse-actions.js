describe("Test mouse actions", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.openPageInCurrentTab('#actions')
    })

    it.skip("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })

    it("I should be able to drag and drop a draggable element", () => {
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        // cy.get('#draggable')
        //     .trigger('mousedown', { which: 1 })
        //     .trigger('mousemove', { pageX: 300, pageY: 300 }) // clientX isn't working
        //     .trigger('mouseup', { force: true })
        cy.get('#droppable').contains('Dropped!')
    })

    it("I should be doubleclick a element", () => {
        cy.get('#double-click').should('not.have.class', 'double')
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class', 'double')
    })

    it("I should be click and hold a element", () => {
        cy.get('#click-box').scrollIntoView().trigger('mousedown', { which: 1 }).then((el) => {
            expect(el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })

    // it.only("I should be hover over a element", () => {
    //     cy.visit("http://www.webdriveruniversity.com")
    //     cy.openPageInCurrentTab('#actions')
    //
    //     cy.get('.dropdown[style="float:left;"]').scrollIntoView().trigger('mouseover').then((el) => {
    //         cy.wait(3000)
    //         cy.xpath('//button[contains(text(),"Hover Over Me First!")]/..//a[contains(text(),"Link 1")]').should('be.visible')
    //     })
    //
    // })
})