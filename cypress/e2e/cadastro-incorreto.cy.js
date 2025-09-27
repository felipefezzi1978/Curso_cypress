describe('Página de cadastro', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app') 
      cy.get('[data-test="register-button"]').click();
  })
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
      cy.cadastro('Marjorie Anoquevem', '1', '1', '1');
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    
    
    })
})