const baseUrl = 'https://reqres.in/api/users';

describe('Delete user | Valid id', () => {
  const url = baseUrl + '/2';
  it('Validação de status code 204', () => {
    cy.request({
      method: 'DELETE',
      url: url
    }).then((res) => {
      expect(res.status).to.eq(204)
    })
  })
})

describe('Delete user | Invalid id', () => {
  const url = baseUrl + '/22';
  it('Validação de status code 400', () => {
    cy.request({
      method: 'DELETE',
      url: url
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})