import React from 'react'
import DiscographyListing from '../../src/app/components/DiscographyListing'

describe('<DiscographyListing />', () => {
	it('renders', () => {
        const release = {
            title: "'Ligaw Na Tadhana'",
            releaseType: 'SINGLE',
            releaseDate: 'Mar 23 2023',
            imageUrl: 'UPPERCASE-LNT-single.png',
            spotifyUrl:
                'https://open.spotify.com/track/0yQ0RzKaaoiy1xepomQcC0?si=4963648232184926'
        }

		// see: https://on.cypress.io/mounting-react
		cy.mount(<DiscographyListing release={release} />)
        
        cy.get('[data-testid="release-item"]').should('exist')
        cy.get('[data-testid="release-item"]').should('have.length', 1)
        cy.get('[data-testid="release-thumbnail"]').should('exist')
        cy.get('[data-testid="release-thumbnail"]').should('have.length', 1)
        cy.get('[data-testid="release-title"]').should('exist')
        cy.get('[data-testid="release-title"]').should('have.length', 1)
        cy.get('[data-testid="release-date"]').should('exist')
        cy.get('[data-testid="release-date"]').should('have.length', 1)
        cy.get('[data-testid="release-url"]').should('exist')
        cy.get('[data-testid="release-url"]').should('have.length', 1)
    })
})