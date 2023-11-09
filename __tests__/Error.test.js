import { render, screen } from '@testing-library/react'
import Error from '../src/app/error'
import userEvent from '@testing-library/user-event'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

test('renders Error', async () => {
	const user = userEvent.setup()
	render(
		<ErrorBoundary>
			<Error error={{ message: 'test error' }} reset={() => {}} />
		</ErrorBoundary>
	)

	expect(screen.getByTestId('error')).toBeInTheDocument()

	await user.click(screen.getByTestId('retry'))

	expect(screen.getByTestId('error')).toBeInTheDocument()
})
