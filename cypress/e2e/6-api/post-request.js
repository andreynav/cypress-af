describe("Post Request", () => {
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)

    it("Create a new valid post via /posts api and validate POST status code", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:80/posts",
            body: {
                title: randomTitle,
                author: "Benny Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })

    it("Validate title of latest post", () => {
        let titlesOfPosts = []

        cy.request({
            method: 'GET',
            url: 'http://localhost:80/posts',
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            cy.log(randomTitle)

            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach((item) => {
                titlesOfPosts.push(item.title)
            })
            expect(titlesOfPosts[titlesOfPosts.length - 1]).equals(randomTitle)
        })
    })
})