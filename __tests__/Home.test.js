import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

test('renders Home', () => {
	render(<Home />)

	expect(screen.getByTestId('home')).toBeInTheDocument()
	expect(screen.getByTestId('home-header')).toBeInTheDocument()
	expect(screen.getByTestId('band-logo')).toBeInTheDocument()
	expect(screen.getByTestId('band-description')).toBeInTheDocument()
})
