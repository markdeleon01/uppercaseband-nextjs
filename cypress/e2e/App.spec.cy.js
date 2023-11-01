describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')

    cy.get('title').contains('U P P E R C A S E')
    cy.get('[data-testid="main"]').should('exist')
		cy.get('[data-testid="main"]').should('have.length', 1)
    cy.get('[data-testid="page-header"]').should('exist')
		cy.get('[data-testid="page-header"]').should('have.length', 1)
    cy.get('[data-testid="page-content"]').should('exist')
		cy.get('[data-testid="page-content"]').should('have.length', 1)
  })
})
