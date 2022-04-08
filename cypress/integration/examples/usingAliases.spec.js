describe('Working with inputs',()=>{

    it('should navigate to website',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','')
    })

    it('should fill username',function(){
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some username',{delay:100})
    })

    it('should fill password',()=>{
        cy.get('#user_password').as('password')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('this is the password')
    })

    it('should submit login form',()=>{
        cy.contains('Sign in').click()

    })

    it('should display error message',()=>{
        cy.get('.alert-error').should('be.visible')
    })

    it('should log the username and passwords used to login',function(){
        cy.log('username is ').type('@username')
        cy.log('password is ').type('@password')
    })
})