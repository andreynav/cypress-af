describe("Get Request", () => {
    let response

    it("Validate status code of the /posts api", () => {
        response = cy.request('http://localhost:80/posts')
        response.its("status").should("equal", 200)
    })

    it.only("Validate post API contains correct keys and values", () => {
        response = cy.request({
            method: 'GET',
            url: 'http://localhost:80/posts',
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body).should('have.length', 2)

            body.forEach((item) => {
                expect(item).to.have.all.keys('id', 'title', 'author')
            })

            expect(body[0]).has.property('id', 1)
            expect(body[0]).has.property('title', 'json-server')
            expect(body[0]).has.property('author', 'Andy NNN')

            expect(body[1].id).equals(2)
            expect(body[1].title).equals('json-server test')
            expect(body[1].author).equals('Andy Nav')
        })
    })
})