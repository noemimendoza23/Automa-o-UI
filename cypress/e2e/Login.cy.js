/// <reference types="cypress" />

context('Funcionalidade login', () => {

    it('Deve fazer Login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá,')      

    })
    it('Deve conter uma mensagem de erro ao inserir usuário inválido' ,() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('luno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' ,'Endereço de e-mail desconhecido.')

    })

    it('Deve conter uma mensagem de erro ao inserir senha inválida' ,() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })

})