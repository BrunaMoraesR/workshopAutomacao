const baseUrl = 'https://reqres.in/api/register';

describe('Sucessful register', () => {
  const requestBody = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }
  it('Validação de status code 200', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('id', 'token')
      expect(body.id).to.eq(4)
    })
  })
})