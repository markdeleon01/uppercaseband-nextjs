import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

test('clicks About link and gets highlighted as selected link', async () => {
	const user = userEvent.setup()

	render(<NavBar />, { wrapper: MemoryRouter })

	expect(screen.getByTestId('nav')).toBeInTheDocument()
	expect(screen.getByTestId('about-link')).toBeInTheDocument()

	await user.click(screen.getByTestId('about-link'))

	const aboutLink = screen.getByTestId('about-link')
	expect(aboutLink.className).toEqual('navLinkSelected')
})
