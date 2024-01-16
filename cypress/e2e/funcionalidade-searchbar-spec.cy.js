describe('template spec', () => {
  
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/')
  });

  it('Verificar se o searchbar é visivel', () => {
    
    cy.get('[data-test="botaobusca"]').should('be.visible')

  });
})