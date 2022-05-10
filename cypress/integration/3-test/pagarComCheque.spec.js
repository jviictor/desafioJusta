const login = 'candidato@justa.com.vc'
const password = 'tamojusto'

describe("#desafioJusta 3 - Eu, como Herói, desejo realizar a compra e efeturar o pagamento com cheque",()=>{
  beforeEach(()=>{
    cy.visit("http://automationpractice.com")
  });

  it("Fazer a compra, trocando de endereço",()=>{
  //First Page - selecionando um elemento para adicionar no carrinho e confirmando
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('be.visible').click()
    cy.get('.button-medium > span').click()
  //Second Page - Adicionando mais uma peça e clicando no botão para prosseguir com a compra
    cy.get('[name="quantity_1_1_0_0"]').type('2')
    cy.get('[class="button btn btn-default standard-checkout button-medium"]').click()
  //Third page - Entrando com login e senha e clicando para logar 
    cy.get('#email').type(login)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
  //Fourth page - Clicar para alterar endereço
    cy.get('[name="processAddress"]').click()
  //Fifth page Shipping - Clicar no Checkbox para confirmar que está de acordo com as politicas e botão prosseguir
    cy.get('input[type="checkbox"][value="1"').check()
    cy.get('[class="button btn btn-default standard-checkout button-medium"]').click()
  //Sixth page PLEASE CHOOSE YOUR PAYMENT METHOD - Página para escolher a forma de pagamento clicando em Cheque
    cy.get('[href="http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment"]').click()
  //seventh page ORDER SUMMARY - Confirmação da operação, botão confirmar
    cy.get('[class="button btn btn-default button-medium"]').click()
  });
});
