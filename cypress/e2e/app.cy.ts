describe('top page', () => {
  it('show login form', () => {
    cy.visit('http://localhost:3000')

    //FIXME:'login'という名前のフォームがあること
    cy.url().should('not.include', 'login')
  })
})