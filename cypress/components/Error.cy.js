import React from 'react'
import Error from '../../src/app/error'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

describe('<Error />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ErrorBoundary><Error error={{ message: 'test error' }} reset={() => {}} /></ErrorBoundary>)

        cy.get('[data-testid="error"]').should('exist')
		cy.get('[data-testid="error"]').should('have.length', 1)
    })
})
