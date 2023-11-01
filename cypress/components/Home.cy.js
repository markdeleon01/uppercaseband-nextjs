import React from 'react'
import Home from '../../src/app/page'

describe('<Home />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Home />)

		cy.get('[data-testid="home"]').should('exist')
		cy.get('[data-testid="home"]').should('have.length', 1)
		cy.get('[data-testid="home-header"]').should('exist')
		cy.get('[data-testid="home-header"]').should('have.length', 1)
		cy.get('[data-testid="band-logo"]').should('exist')
		cy.get('[data-testid="band-logo"]').should('have.length', 1)
		cy.get('[data-testid="band-description"]').should('exist')
		cy.get('[data-testid="band-description"]').should('have.length', 1)
	})
})
