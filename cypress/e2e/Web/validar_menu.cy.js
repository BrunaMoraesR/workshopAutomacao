describe('Validação do Menu 4ALL Tests', () => {
  beforeEach(() => {
    cy.visit('http://4alltests.com.br/')
  })

  it('Validar o acesso a página Home', () => {
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Home')
    //Validação do título da página
    cy.get('#banner > header > h2').should('have.text', 'Portal 4ALL Tests')
  })
  it('Validar o acesso a página Ferramentas', () => {
    //Clicando no link da página
    cy.get(':nth-child(2) > [href="ferramentas"]').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Ferramentas')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Ferramentas de Testes')
  })
  it('Validar o acesso a página Eventos', () => {
    //Clicando no link da página
    cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Eventos')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Eventos')
  })
  it('Validar o acesso a página Vagas', () => {
    //Clicando no link da página
    cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Vagas')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Vagas')
  })
  it('Validar o acesso a página Comunidades', () => {
    //Clicando no link da página
    cy.get(':nth-child(1) > :nth-child(5) > a').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Comunidades')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Comunidades')
  })
  it('Validar o acesso a página Cursos', () => {
    //Clicando no link da página
    cy.get(':nth-child(6) > a').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Cursos')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Cursos')
  })
  it('Validar o acesso a página Referências', () => {
    //Clicando no link da página
    cy.get(':nth-child(7) > a').click()
    //Validação do destaque no menu da página exibida
    cy.get('.current > a').should('have.text', 'Referências')
    //Validação do título da página
    cy.get(':nth-child(1) > header > h3').should('have.text', 'Referências')
  })
  it('Validar o acesso a página Blog', () => {
    //Clicando no link da página
    cy.get(':nth-child(8) > a').click()
    //Validação do título da página
    cy.get('.section-header > .title').should('have.text', 'Recentes')
  })
})