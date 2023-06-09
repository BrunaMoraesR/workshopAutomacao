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

describe('Create user | Name', () => {
  const requestBody = {
    "name": "morpheus"
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
      expect(body.job).to.be.null
    })
  })
})

describe('Create user | Job', () => {
  const requestBody = {
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
      expect(body.name).to.be.null
      expect(body.job).to.eq(requestBody.job)
    })
  })
})

describe('Create user | Without body', () => {
  it('Validação de status code 400', () => {
    cy.request({
      method: 'POST',
      url: baseUrl
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})