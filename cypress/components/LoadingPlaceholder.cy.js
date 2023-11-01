import React from 'react'
import LoadingPlaceholder from '../../src/app/components/LoadingPlaceholder'

describe('<LoadingPlaceholder />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingPlaceholder />)
  
    cy.get('[data-testid="loading"]').should('exist')
		cy.get('[data-testid="loading"]').should('have.length', 1)
  })
})
