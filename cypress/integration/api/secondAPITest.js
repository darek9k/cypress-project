/// <reference types="cypress" />

describe("Querying directly to the API", () => {

    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Authorization and adding a new entry", () => {
        const authorizationData = {   
            "user": {   
            "email": "dariusz-kowalski@test.pl",
            "password":"dariuszkowalski123qwe"
            }
           }

        const articleData = {
            "article":{
                "taglist":[],
                "title":"testowanienaekranie2",
                "description":"test",
                "body":"test"
            }
        }   
        cy.request("POST", "https://api.realworld.io/api/users/login", authorizationData)
        .its("body").then(res => {
            const authToken = res.user.token;
            
            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: articleData,
                headers: {
                    'Authorization': 'Token ' + authToken
                }
            }).then(res => {
                expect(res.status).to.equal(201)
            })
        }) 
    })
})