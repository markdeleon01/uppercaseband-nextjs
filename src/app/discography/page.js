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
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}
