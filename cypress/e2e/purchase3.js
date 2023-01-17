class cheap {

  order(){
    //selecionar campo de filtro menor para o maior
    cy.get('#header_container > div.header_secondary_container > div.right_component > span > select').select('Price (low to high)');
    //selecionar os dois produtos de valores menores
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.wait(2000)
     //clicar no carrinho de compras
     cy.get('#shopping_cart_container > a').click();
     //clica no checkout
    cy.get('#checkout').click();
    //Coloca as informações solicitadas
    cy.get('#first-name').type('João victor');
    cy.get('#last-name').type('De Oliveira Santos');
    cy.get('#postal-code').type('55565000');
    //tela de confirmação clicar em continue
    cy.get('#continue').click();
    //finalização da compra
    cy.get('#finish').click();
  }

}

export default new cheap()