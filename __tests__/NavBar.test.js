import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../src/app/components/NavBar'

test('renders NavBar', () => {
	render(<NavBar />, { wrapper: MemoryRouter })

    expect(screen.getByTestId('nav')).toBeInTheDocument()
	expect(screen.getByTestId('home-link')).toBeInTheDocument()
    expect(screen.getByTestId('about-link')).toBeInTheDocument()
    expect(screen.getByTestId('discography-link')).toBeInTheDocument()
    expect(screen.getByTestId('events-link')).toBeInTheDocument()
})
