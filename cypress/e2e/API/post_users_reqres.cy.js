const baseUrl = 'https://reqres.in/api/users';

describe('Create user | Name and job', () => {
  const requestBody = {
    "name": "morpheus",
    "job": "leader"
  }
  it('Validação de status code 201', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      expect(res.status).to.eq(201)
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
      expect(body).to.have.keys('name', 'job', 'id', 'createdAt')
      expect(body.name).to.eq(requestBody.name)
      expect(body.job).to.eq(requestBody.job)
    })
  })
})