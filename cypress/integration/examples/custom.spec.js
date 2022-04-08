describe("Custom Commands", ()=>{
    it('should login to application using custom cypress commands', function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login();
    });
})