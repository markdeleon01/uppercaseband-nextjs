import { render, screen } from '@testing-library/react'
import GlobalError from '../src/app/global-error'
import userEvent from '@testing-library/user-event'

test('renders GlobalError', async () => {
	const user = userEvent.setup()
	render(<GlobalError error={{ message: 'test error' }} reset={() => {}} />)

	expect(screen.getByTestId('page-error')).toBeInTheDocument()

	await user.click(screen.getByTestId('try-again'))

	expect(screen.getByTestId('page-error')).toBeInTheDocument()
})
