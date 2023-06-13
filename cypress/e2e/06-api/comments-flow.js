describe("Post, Get, Delete comments Request", () => {
    let commentsLength = 0
    let baseUrl = 'http://localhost:80'
    let randomBody = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)
    let randomPostId = Math.floor(Math.random() * 1000 + 1)

    it("Create a new comment", () => {
        cy.request({
            method: "POST",
            url: `${baseUrl}/comments`,
            body: {
                body: randomBody,
                postId: randomPostId
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })

    it("Locate and assert the new comment", () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/comments`,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            commentsLength = body.length

            expect(body[body.length - 1].body).equals(randomBody)
            expect(body[body.length - 1].postId).equals(randomPostId)
        })
    })

    it("Delete the new comment", () => {
        cy.request({
            method: "DELETE",
            url: `http://localhost:80/comments/${commentsLength}`,
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    })
})