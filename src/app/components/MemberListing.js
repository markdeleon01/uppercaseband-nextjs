import styles from './MemberListing.module.css'

export default function MemberListing({ member }) {
	return (
		<p
			data-testid='member-item'
			className={styles.memberItem}
			key={member.name}
		>
			<span data-testid='member-info'>
				{member.name} - {member.role}
			</span>
		</p>
	)
}
