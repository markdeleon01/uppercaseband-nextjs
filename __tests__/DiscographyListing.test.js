import { render, screen } from '@testing-library/react'
import DiscographyListing from '../src/app/components/DiscographyListing'

test('renders DiscographyListing', () => {
    const release = {
        title: "'Ligaw Na Tadhana'",
        releaseType: 'SINGLE',
        releaseDate: 'Mar 23 2023',
        imageUrl: 'UPPERCASE-LNT-single.png',
        spotifyUrl:
            'https://open.spotify.com/track/0yQ0RzKaaoiy1xepomQcC0?si=4963648232184926'
    }

	render(<DiscographyListing release={release} />)

	expect(screen.getByTestId('release-item')).toBeInTheDocument()
    expect(screen.getByTestId('release-thumbnail')).toBeInTheDocument()
    expect(screen.getByTestId('release-title')).toBeInTheDocument()
    expect(screen.getByTestId('release-date')).toBeInTheDocument()
    expect(screen.getByTestId('release-url')).toBeInTheDocument()
})
