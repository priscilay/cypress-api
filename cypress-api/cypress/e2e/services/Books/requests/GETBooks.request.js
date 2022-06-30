// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function allBooks() {
  // cy.request - client http
  return cy.request({
    method: 'GET',
    url: '/v1/Books',
    failOnStatusCode: false,
  })
}

export { allBooks };