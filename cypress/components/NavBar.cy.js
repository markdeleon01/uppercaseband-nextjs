import React from 'react'
import NavBar from '../../src/app/components/NavBar'

describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />)

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
})