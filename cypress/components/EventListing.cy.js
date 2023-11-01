import React from 'react'
import EventListing from '../../src/app/components/EventListing'

describe('<EventListing />', () => {
	it('renders', () => {
		const event = {
			id: '601',
			title: "'Ligaw Na Tadhana'",
			location: 'Toronto, Canada',
			date: 'Mar 23 2023',
			imageUrl: 'ligaw-na-tadhana.png',
			content:
				"<p>UPPERCASE's latest single '<i>Ligaw Na Tadhana</i>' lyric video:</p>",
			externalUrl: 'https://youtu.be/Z3nZp2xkFCg?si=t0nPvaDqJWknNHLu'
		}

		// see: https://on.cypress.io/mounting-react
		cy.mount(<EventListing event={event} />)

        cy.get('[data-testid="event-item"]').should('exist')
        cy.get('[data-testid="event-item"]').should('have.length', 1)
        cy.get('[data-testid="event-title"]').should('exist')
        cy.get('[data-testid="event-title"]').should('have.length', 1)
        cy.get('[data-testid="event-date"]').should('exist')
        cy.get('[data-testid="event-date"]').should('have.length', 1)
        cy.get('[data-testid="event-location"]').should('exist')
        cy.get('[data-testid="event-location"]').should('have.length', 1)
        cy.get('[data-testid="event-content"]').should('exist')
        cy.get('[data-testid="event-content"]').should('have.length', 1)
        cy.get('[data-testid="event-url"]').should('exist')
        cy.get('[data-testid="event-url"]').should('have.length', 1)
	})
})
