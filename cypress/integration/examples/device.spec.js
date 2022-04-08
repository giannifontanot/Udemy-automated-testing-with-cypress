describe('Device Tests',()=>{

    it('720p',()=>{
        cy.viewport(1280,720);
        cy.visit('http://example.com');
        cy.title().should('include', 'Example Domain')
        cy.wait(3000);
    })

    it('1080p',()=>{
        cy.viewport(1980,1080);
        cy.visit('http://example.com');
        cy.title().should('include', 'Example Domain')
        cy.wait(3000);
    })

    it('iPhoneX',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://example.com');
        cy.title().should('include', 'Example Domain')
        cy.wait(3000);
    })

    it('iPadMini',()=>{
        cy.viewport('ipad-mini');
        cy.visit('http://example.com');
        cy.title().should('include', 'Example Domain')
        cy.wait(3000);
    })

    it('MacBook15',()=>{
        cy.viewport('macbook-15');
        cy.visit('http://example.com');
        cy.wait(3000);
        cy.title().should('include', 'Example Domain')
    })

})