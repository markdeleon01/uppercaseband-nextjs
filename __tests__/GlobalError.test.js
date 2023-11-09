import { render, screen } from '@testing-library/react'
import GlobalError from '../src/app/global-error'

test('renders GlobalError', () => {
    render(<GlobalError error={{ message: 'test error' }} reset={() => {}}/>)

    expect(screen.getByTestId('page-error')).toBeInTheDocument()
})
