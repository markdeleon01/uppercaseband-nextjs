describe('Test the about page', () => {
	it('visits the about url', () => {
		cy.visit('/about')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('[data-testid="about"]').should('exist')
		cy.get('[data-testid="about"]').should('have.length', 1)
		cy.get('[data-testid="about-header"]').should('exist')
		cy.get('[data-testid="about-header"]').should('have.length', 1)
		cy.get('[data-testid="member-item"]').should('exist')
		cy.get('[data-testid="member-item"]').should('have.length', 4)
		cy.get('[data-testid="band-pic"]').should('exist')
		cy.get('[data-testid="band-pic"]').should('have.length', 1)
		cy.get('[data-testid="biography"]').should('exist')
		cy.get('[data-testid="biography"]').should('have.length', 1)
	})

	it('clicks the about link', () => {
		cy.visit('/')
        cy.get('[data-testid="about-link"]').should('exist')
		cy.get('[data-testid="about-link"]').should('have.length', 1)
		cy.get('[data-testid="about-link"]').click()

        cy.url().should('include', '/about')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('[data-testid="about"]').should('exist')
		cy.get('[data-testid="about"]').should('have.length', 1)
		cy.get('[data-testid="about-header"]').should('exist')
		cy.get('[data-testid="about-header"]').should('have.length', 1)
		cy.get('[data-testid="member-item"]').should('exist')
		cy.get('[data-testid="member-item"]').should('have.length', 4)
		cy.get('[data-testid="band-pic"]').should('exist')
		cy.get('[data-testid="band-pic"]').should('have.length', 1)
		cy.get('[data-testid="biography"]').should('exist')
		cy.get('[data-testid="biography"]').should('have.length', 1)
	})
})
