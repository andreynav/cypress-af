describe("Delete Request", () => {
    it("Delete non-existent post via /posts api", () => {
        let postId = 100
        cy.request({
            method: "DELETE",
            url: `http://localhost:80/posts/${postId}`,
            failOnStatusCode:false,
        }).then((response) => {
            expect(response.status).to.eql(404)
        })
    })

    it("Delete existent post via /posts api", () => {
        let postId = 5
        cy.request({
            method: "DELETE",
            url: `http://localhost:80/posts/${postId}`,
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    })
})