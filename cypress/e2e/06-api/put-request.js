describe("PUT Request", () => {
    let postId = 2
    it("Update an existing post via the /posts api", () => {
        cy.request({
            method: "PUT",
            url: `http://localhost:80/posts/${postId}`,
            body: {
                title: "Where can I buy cypress?",
                author: "Tom Jones",
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
        })
    })
})