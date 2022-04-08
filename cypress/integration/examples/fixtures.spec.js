describe('Login with fixtures data', () => {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture('user').then(userContent => {
            const username = userContent.username;
            const userpassword = userContent.password;
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(userpassword)
            cy.contains('Sign in').click();
        })
    })
})