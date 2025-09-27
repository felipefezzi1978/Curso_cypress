describe('Página de cadastro', () => {
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app')      
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="input-name"]').type('Marjorie Anoquevem');
      cy.get('[data-test="input-email"]').type('marj@email.com');
      cy.get('[data-test="input-password"]').type('Senha123');
      cy.get('[data-test="input-confirm-password"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();

    })

  //   it('Visite a página de principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
  //     cy.visit('https://adopet-frontend-cypress.vercel.app')      
  //     cy.get('.button').click();

  // })

  // it('Visite a página de principal do AdoPet e teste os botões header', () => {
  //     cy.visit('https://adopet-frontend-cypress.vercel.app')      
  //     cy.get('.button').click();


  // })

  //   it("Visita a página de /login do Adopet", ()=>{
  //     cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  //   })

  //   it("Visita a página de /home do Adopet", ()=>{
  //     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  //   })

  //   it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
  //     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  //     cy.get('.header__message').click()  
  //   })


})