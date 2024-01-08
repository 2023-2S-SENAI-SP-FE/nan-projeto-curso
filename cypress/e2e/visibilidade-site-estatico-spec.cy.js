describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Button (OK) para Salvar Cadastro do Cliente', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/');
    cy.get('.btnoferta').should('be.visible');
    cy.get('.btnoferta').should('have.attr', 'onclick', 'Cadastroclient()');
    cy.get('.btnoferta').should('have.class', 'btnoferta');
    cy.get('.btnoferta').should('have.text', 'OK');
    cy.get('.btnoferta').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Button (COMPRAR) para Compra do Produto', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/');
    cy.get('.item1 > .EnviaCompra').should('be.visible');
    cy.get('.item1 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item1 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item1 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item1 > .EnviaCompra').click();
    cy.get('.item2 > .EnviaCompra').should('be.visible');
    cy.get('.item2 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item2 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item2 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item2 > .EnviaCompra').click();
    cy.get('.item3 > .EnviaCompra').should('be.visible');
    cy.get('.item3 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item3 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item3 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item3 > .EnviaCompra').click();
    cy.get('.item7 > .EnviaCompra').should('be.visible');
    cy.get('.item7 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item7 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item7 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item7 > .EnviaCompra').click();
    cy.get('.item4 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item4 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item4 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item4 > .EnviaCompra').click();
    cy.get('.item5 > .EnviaCompra').should('be.visible');
    cy.get('.item5 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item5 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item5 > .EnviaCompra').click();
    cy.get('.item6 > .EnviaCompra').should('be.visible');
    cy.get('.item6 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item6 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item6 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item6 > .EnviaCompra').click();
    cy.get('.item8 > .EnviaCompra').should('be.visible');
    cy.get('.item8 > .EnviaCompra').should('have.attr', 'onclick', 'Pesquisaprod()');
    cy.get('.item8 > .EnviaCompra').should('have.class', 'EnviaCompra');
    cy.get('.item8 > .EnviaCompra').should('have.text', 'COMPRAR');
    cy.get('.item8 > .EnviaCompra').click();
    /* ==== End Cypress Studio ==== */
  });
})