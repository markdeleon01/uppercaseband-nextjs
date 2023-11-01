describe('Test the home page', () => {
	it('visits the app root url', () => {
		cy.visit('http://localhost:3000/')

		cy.get('h1').contains('U P P E R C A S E')
	})

	it('has navigation links', () => {
		cy.visit('http://localhost:3000/')

		cy.get('[data-testid="nav"]').should('exist')
		cy.get('[data-testid="nav"]').should('have.length', 1)
		cy.get('[data-testid="home-link"]').should('exist')
		cy.get('[data-testid="home-link"]').should('have.length', 1)
		cy.get('[data-testid="about-link"]').should('exist')
		cy.get('[data-testid="about-link"]').should('have.length', 1)
		cy.get('[data-testid="discography-link"]').should('exist')
		cy.get('[data-testid="discography-link"]').should('have.length', 1)
		cy.get('[data-testid="events-link"]').should('exist')
		cy.get('[data-testid="events-link"]').should('have.length', 1)
	})

	it('has page content', () => {
		cy.visit('http://localhost:3000/')

		cy.get('[data-testid="home"]').should('exist')
		cy.get('[data-testid="home"]').should('have.length', 1)
		cy.get('[data-testid="home-header"]').should('exist')
		cy.get('[data-testid="home-header"]').should('have.length', 1)
		cy.get('[data-testid="band-logo"]').should('exist')
		cy.get('[data-testid="band-logo"]').should('have.length', 1)
		cy.get('[data-testid="band-description"]').should('exist')
		cy.get('[data-testid="band-description"]').should('have.length', 1)
		cy.get('p').find('a').should('have.length', 3)
	})
})
