import { render, screen } from '@testing-library/react'
import Loading from '../src/app/loading'

test('renders Loading', () => {
	render(<Loading />)

	expect(screen.getByTestId('loading')).toBeInTheDocument()
})
