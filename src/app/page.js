import styles from './page.module.css'

import { Suspense } from 'react'
import Loading from './loading'
import Image from 'next/image'

export default function Home() {
	return (
		<div data-testid='home' className={styles.home}>
			<h2 data-testid='home-header'>Welcome to the Official Website!</h2>
			<div data-testid='band-logo' className={styles.bandLogo}>
				<Suspense fallback={<Loading />}>
					<Image
						src='/UPPERCASE-logo.png'
						alt='UPPERCASE-logo.png'
						sizes='450vw'
						style={{
							width: '100%',
							height: 'auto'
						}}
						width={450}
						height={300}
					/>
				</Suspense>
			</div>
			<div>
				<p data-testid='band-description'>
					UPPERCASE is a Filipino-Canadian indie pop rock band <br />
					from Toronto, Canada pursuing Original Pilipino Music (OPM).
				</p>
				<p>
					Check out the band&apos;s music on&nbsp;
					<a
						href='https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB'
						target='blank'
					>
						Spotify
					</a>
					!
				</p>
				<p>
					Follow the band on&nbsp;
					<a
						href='https://www.instagram.com/ang.bandang.uppercase/'
						target='blank'
					>
						Instagram
					</a>
					!
				</p>
				<p>
					Like and Share on&nbsp;
					<a
						href='https://www.facebook.com/ang.bandang.uppercase/'
						target='blank'
					>
						Facebook
					</a>
					!
				</p>
			</div>
		</div>
	)
}
