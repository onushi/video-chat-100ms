describe('top page', () => {
  it('show login form', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('not.include', 'login')
  })
})