describe('Working with inputs',()=>{

    it('should navigate to website',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','')
    })

    it('should fill username',()=>{
        cy.get('#user_login').clear()
        cy.get('#user_login').type('some username')
    })

    it('should fill password',()=>{
        cy.get('#user_password').clear()
        cy.get('#user_password').type('this is the password')
    })

    it('should submit login form',()=>{
        cy.contains('Sign in').click()

    })

    it('should display error message and verify content',()=>{
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain','Login and/or password are wrong')
    })
})