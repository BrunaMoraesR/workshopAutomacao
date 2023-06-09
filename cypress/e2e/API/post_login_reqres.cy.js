const baseUrl = 'https://reqres.in/api/login';

describe('Sucessful login', () => {
  const requestBody = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
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
      expect(body).to.have.keys('token')
    })
  })
})

describe('Unsucessful login | Without password', () => {
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

describe('Unsucessful login | Without email', () => {
  const requestBody = {
    "password": "cityslicka"
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

describe('Unsucessful login | Invalid user', () => {
  const requestBody = {
    "email": "teste.holt@reqres.in",
    "password": "cityslicka"
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
      expect(body.error).to.eq('user not found')
    })
  })
})