describe('Broswer actions',()=>{
    it('Should load correct url', ()=>{
        cy.visit('http://example.com',{timeout:5000})
    })

    it('should check correct url',()=>{
        cy.url().should('include','example.com')
    })

    it ('should wait for 3 seconds',()=>{
        cy.wait(3000)
    })

    it('should pause the execution',()=>{
        cy.pause()
    })

    it('should check for correct element on the page',()=>{
        cy.get('body').should('be.visible')
    })
})