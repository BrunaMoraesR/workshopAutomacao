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

describe('Unsucessful register | Without password', () => {
  const requestBody = {
    "email": "eve.holt@reqres.in"
  }
  it('Validação de status code 400', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('error')
      expect(body.error).to.eq('Missing password')
    })
  })
})

describe('Unsucessful register | Without email', () => {
  const requestBody = {
    "password": "pistol"
  }
  it('Validação de status code 400', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('error')
      expect(body.error).to.eq('Missing email or username')
    })
  })
})

describe('Unsucessful register | Invalid user', () => {
  const requestBody = {
    "email": "teste.holt@reqres.in",
    "password": "pistol"
  }
  it('Validação de status code 400', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: requestBody,
      failOnStatusCode: false
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('error')
      expect(body.error).to.eq('Note: Only defined users succeed registration')
    })
  })
})