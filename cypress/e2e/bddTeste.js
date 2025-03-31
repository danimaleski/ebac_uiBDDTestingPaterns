/// <reference types="cypress" />

import { profilePage } from "../support/pages/profile.page"
const { email, senha} = require("../fixtures/data.json")

contexto('Dado que estou na página inicial', ()=> {
  context('Quando eu faço login', ()=>{
    cy.login(email, senha)

    it('Então o nome do usuário deve aparecer na página de perfil', () => {
      profilePage.customerName().should('have.text', 'EBAC Cliente')
    })
  })
})

