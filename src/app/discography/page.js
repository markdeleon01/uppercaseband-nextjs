'use client'

import styles from './page.module.css'

import { useEffect, useState } from 'react'
import { fetchDiscography } from '../services/DiscographyService'
import DiscographyListing from '../components/DiscographyListing'

export default function Discography() {
	const [releases, setReleases] = useState([])

	useEffect(() => {
		const getReleases = () => {
			fetchDiscography().then((data) => {
				setReleases(data)
			})
		}
		getReleases()
	}, [])

	return (
		<div data-testid='discography' className={styles.discography}>
			<h2 data-testid='discography-header' className={styles.discographyHeader}>
				Discography
			</h2>
			<p data-testid='discography-headline' className={styles.discographyHeadline}>
				The band released a full-length album, an EP, and top-hit singles that
				have garnered popularity and heavy streaming from listeners in the
				Philippines and around the world.
			</p>
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}
