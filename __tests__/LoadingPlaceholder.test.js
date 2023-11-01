import { render, screen } from '@testing-library/react'
import LoadingPlaceholder from '../src/app/components/LoadingPlaceholder'

test('renders LoadingPlaceholder', () => {
	render(<LoadingPlaceholder />)

	expect(screen.getByTestId('loading')).toBeInTheDocument()
})
