import axios from 'axios'
import { render, screen } from '@testing-library/react'
import About from '../src/app/about/page'

jest.mock('axios')

test('renders About', () => {
	axios.get.mockResolvedValue(async () => {
		[
			{
				name: 'Mark de Leon',
				role: 'vocals, guitars',
				'image-url': 'mark-deleon.png'
			},
			{
				name: 'Allan Lagat',
				role: 'bass',
				'image-url': 'allan-lagat.png'
			},
			{
				name: 'Joey Giagonia',
				role: 'lead guitars',
				'image-url': 'joey-giagonia.png'
			},
			{
				name: 'Kyle Saliva',
				role: 'drums',
				'image-url': 'kyle-saliva.png'
			}
		]
	})

	render(<About />)

	setTimeout( () => {
		expect(screen.getByTestId('about')).toBeDefined()
		expect(screen.getByTestId('about-header')).toBeDefined()
		expect(screen.getByTestId('band-pic')).toBeDefined()
		expect(screen.getByTestId('biography')).toBeDefined()
		expect(screen.getAllByTestId('member-item').length).toBeEqual(4)
	}, 2000)
})
