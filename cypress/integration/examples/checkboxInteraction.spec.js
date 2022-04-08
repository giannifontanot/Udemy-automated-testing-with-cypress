describe('Working with inputs',()=>{

    it('should navigate to website',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','')
    })

    it('should mark the checkbox',()=>{
        cy.get('input[type=checkbox]').click()
        cy.wait(5000)
        cy.get('#user_login').type('some username',{delay:1})
        cy.get('#user_password').type('this is the password',{delay:1})
    })

})