describe('List Users', () => {
  it('Deveria retornar status code 200', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users'
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users'
    }).then((res) => {
      const body = res.body;
      cy.log(res.body)
      expect(body.page).to.eq(1)
      expect(body.data.length).to.eq(6)
    })
  })
})