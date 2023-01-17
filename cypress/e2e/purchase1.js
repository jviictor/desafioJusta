class tshirt {

  purchase(){
    //Seleciona o objeto para colocar no carrinho
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.wait(2000);
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

export default new tshirt()