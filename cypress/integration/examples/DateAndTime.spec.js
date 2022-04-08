describe('Working with inputs',()=>{

    it('should override the existing date',()=>{
        const newDate = new Date(2000, 10, 10).getTime();
        cy.clock(newDate);
        cy.log(newDate);
    })
})