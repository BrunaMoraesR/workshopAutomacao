const baseUrl = 'https://reqres.in';

describe('List Users', () => {
  const url = baseUrl + '/api/users';
  it('Validação status code 200', () => {
    cy.request({
      method: 'GET',
      url: url
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'GET',
      url: url
    }).then((res) => {
      const body = res.body;
      cy.log(res.body)
      expect(body.page).to.eq(1)
      expect(body.data.length).to.eq(6)
    })
  })
})

describe('Single User', () => {
  const url = baseUrl + '/api/users/1';
  it('Validação status code 200', () => {
    cy.request({
      method: 'GET',
      url: url
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'GET',
      url: url
    }).then((res) => {
      const body = res.body;
      cy.log(res.body)
      expect(body.data).to.have.keys('id', 'email', 'first_name', 'last_name', 'avatar')
      expect(body.data.id).to.eq(1)
    })
  })
})

describe('User not found', () => {
  const url = baseUrl + '/api/users/23';
  it('Validação status code 404', () => {
    cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })
})