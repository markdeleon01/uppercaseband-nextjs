import styles from './EventListing.module.css'

import ReactHtmlParser from 'react-html-parser'
import formatDate from '../lib/formatDate'

export default function EventListing({ event }) {
	return (
		<div data-testid='event-item' className={styles.eventItem}>
			<span data-testid='event-title' className={styles.eventTitle}>
				{event.title}
			</span>
			<br />
			<span data-testid='event-date' className={styles.eventDate}>
				{formatDate(event.date)}
			</span>
			<br />
			<span data-testid='event-location' className={styles.eventLocation}>
				{event.location}
			</span>
			<br />
			<span data-testid='event-content' className={styles.eventContent}>
				{ReactHtmlParser(event.content)}
			</span>
			<a
				data-testid='event-url'
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
