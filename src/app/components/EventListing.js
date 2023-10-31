import styles from './EventListing.module.css'

import ReactHtmlParser from 'react-html-parser'
import formatDate from '../lib/formatDate'

export default function EventListing({ event }) {
	return (
		<div className={styles.eventItem}>
			<span className={styles.eventTitle}>{event.title}</span>
			<br />
			<span className={styles.eventDate}>{formatDate(event.date)}</span>
			<br />
			<span className={styles.eventLocation}>{event.location}</span>
			<br />
			<span className={styles.eventContent}>{ReactHtmlParser(event.content)}</span>
			<a
				className={styles.eventUrl}
				href={event.externalUrl}
				target='_blank'
				rel='noreferrer'
			>
				Learn more
			</a>
		</div>
	)
}
