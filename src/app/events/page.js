import styles from './page.module.css'

import { fetchEvents } from '../services/EventService'
import EventListing from '../components/EventListing'

export default async function Events() {
	const events = await fetchEvents()

	return (
		<div data-testid='events' className={styles.events}>
			<h2 data-testid='events-header' className={styles.eventsHeader}>
				Events
			</h2>
			{events &&
				events.map((event) => <EventListing key={event.id} event={event} />)}
		</div>
	)
}
