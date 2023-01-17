class LoginPage {

  go(){
    cy.viewport(1920,1080);
    cy.visit('https://www.saucedemo.com');
    cy.title().should('eq',"Swag Labs");
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  }

}

export default new LoginPage()