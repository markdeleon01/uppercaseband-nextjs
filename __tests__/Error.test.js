import { render, screen } from '@testing-library/react'
import Error from '../src/app/error'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

test('renders Error', () => {
	render(
		<ErrorBoundary>
			<Error error={{ message: 'test error' }} reset={() => {}} />
		</ErrorBoundary>
	)

	expect(screen.getByTestId('error')).toBeInTheDocument()
})
