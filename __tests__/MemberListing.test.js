import { render, screen } from '@testing-library/react'
import MemberListing from '@/app/components/MemberListing'

test('renders MemberListing', () => {
	const member = {
		name: 'Mark de Leon',
		role: 'vocals, guitars',
		'image-url': 'mark-deleon.png'
	}

	render(<MemberListing member={member} />)

	expect(screen.getByTestId('member-item')).toBeDefined()
	expect(screen.getByTestId('member-info')).toBeDefined()
})
