describe('Book prices are correct', () => {
    it('should match the price already set', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include','toscrape')
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()
        cy.get('div>p[class=price_color]')
            .contains('£23.88')
    })
})