describe('My First Test', () => {
    it('Smabangi Hello World', () => {
      cy.visit('localhost:3000')
      cy.should('Hello World')
    })
  })