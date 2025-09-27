describe('Exercicios', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
    })

    it('Verifica se o title com o texto “AdoPet” está presente no html', () => {
        cy.get('.header__logo').should('be.visible');        
    })

    it('Verifique se o texto “Quem ama adota!” está presente no html.', () => {
        cy.get('.footer > p').should('contain.text', 'Quem ama adota!');
    })

    it('verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.', () => {
        cy.get('.initial > p').should('contain.text', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!');
    })

    it('Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })


})