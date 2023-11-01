import styles from './DiscographyListing.module.css'

import { Suspense } from 'react'
import Loading from '../loading'
import Image from 'next/image'

import formatDate from '../lib/formatDate'

export default function DiscographyListing({ release }) {
	return (
		<p data-testid='release-item' className={styles.releaseItem}>
			<Suspense fallback={<Loading />}>
				<Image
                    data-testid='release-thumbnail'
					alt={release.imageUrl}
					className={styles.releaseThumbnail}
					src={'/' + release.imageUrl}
					sizes='300vw'
					style={{
						width: '100%',
						height: 'auto'
					}}
					width={300}
					height={300}
				/>
			</Suspense>
			<br />
			<span data-testid='release-title' className={styles.releaseTitle}>{release.title}</span>
			<br />
			<span data-testid='release-date' className={styles.releaseDate}>
				Released: {formatDate(release.releaseDate)}
			</span>
			<br />
			<a
                data-testid='release-url'
				className={styles.releaseUrl}
				href={release.spotifyUrl}
				target='_blank'
				rel='noreferrer'
			>
				Listen on Spotify
			</a>
		</p>
	)
}
