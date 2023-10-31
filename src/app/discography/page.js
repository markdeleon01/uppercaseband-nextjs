import styles from './page.module.css'

import { fetchDiscography } from '../services/DiscographyService'
import DiscographyListing from '../components/DiscographyListing'

export default async function Discography() {
	const releases = await fetchDiscography()

	return (
		<div data-testid='discography' className={styles.discography}>
			<h2 data-testid='discography-header' className={styles.discographyHeader}>
				Discography
			</h2>
			<p className={styles.discographyHeadline}>The band released a full-length album, an EP and top-hit singles <br />that have garnered popularity and heavy streaming <br />from listeners in the Philippines and around the world.
			</p>
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}
