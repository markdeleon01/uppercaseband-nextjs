'use client'

import styles from './page.module.css'

import { useEffect, useState } from 'react'
import { fetchEvents } from '../services/EventService'
import EventListing from '../components/EventListing'

export default function Events() {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = () => {
			fetchEvents().then((data) => {
				setEvents(data)
			})
		}
		getEvents()
	}, [])

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
