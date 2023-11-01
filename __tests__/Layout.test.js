import { render, screen } from '@testing-library/react'
import Layout from '../src/app/layout'

test('renders Layout', () => {
	render(<Layout />)

	expect(screen.getByTestId('main')).toBeInTheDocument()
	expect(screen.getByTestId('page-header')).toBeInTheDocument()
	expect(screen.getByTestId('page-content')).toBeInTheDocument()
})
