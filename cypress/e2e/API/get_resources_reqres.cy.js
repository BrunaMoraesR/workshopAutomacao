const baseUrl = 'https://reqres.in/api/unknown';

describe('List resources | Page 1', () => {
  it('Validação de status code 200', () => {
    cy.request({
      method: 'GET',
      url: baseUrl
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
  it('Validação do body', () => {
    cy.request({
      method: 'GET',
      url: baseUrl
    }).then((res) => {
      const body = res.body;
      cy.log(body)
      expect(body.page).to.eq(1)
      expect(body.data.length).to.eq(6)
    })
  })
})

describe('List resources | Page 2', () => {
  const url = baseUrl + '?page=2'
  it('Validação de status code 200', () => {
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
      cy.log(body)
      expect(body.page).to.eq(2)
      expect(body.data.length).to.eq(6)
    })
  })
})

describe('List resources | Page 3 | No results', () => {
  const url = baseUrl + '?page=3'
  it('Validação de status code 200', () => {
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
      cy.log(body)
      expect(body.page).to.eq(3)
      expect(body.data.length).to.eq(0)
    })
  })
})

describe('Single resource', () => {
  const url = baseUrl + '/7'
  it('Validação de status code 200', () => {
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
      const data = res.body.data;
      cy.log(data)
      expect(data).to.have.keys('id', 'name', 'year', 'color', 'pantone_value')
      expect(data.id).to.eq(7)
    })
  })
})