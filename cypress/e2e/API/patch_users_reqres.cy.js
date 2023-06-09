const baseUrl = 'https://reqres.in/api/users/2';

describe('Update user | Name and job', () => {
  const requestBody = {
    "name": "morpheus",
    "job": "president"
  }
  it('Validação de status code 200', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('name', 'job', 'updatedAt')
      expect(body.name).to.eq(requestBody.name)
      expect(body.job).to.eq(requestBody.job)
    })
  })
})

describe('Update user | Name', () => {
  const requestBody = {
    "name": "morpheus"
  }
  it('Validação de status code 200', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('name', 'job', 'updatedAt')
      expect(body.name).to.eq(requestBody.name)
      expect(body.job).to.be.null
    })
  })
})

describe('Update user | Job', () => {
  const requestBody = {
    "job": "leader"
  }
  it('Validação de status code 200', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl,
      body: requestBody
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body).to.have.keys('name', 'job', 'updatedAt')
      expect(body.name).to.be.null
      expect(body.job).to.eq(requestBody.job)
    })
  })
})

describe('Update user | Without body', () => {
  it('Validação de status code 400', () => {
    cy.request({
      method: 'PATCH',
      url: baseUrl
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})