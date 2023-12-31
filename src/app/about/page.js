'use client'

import styles from './page.module.css'

import { fetchMembers } from '../services/MemberService'
import MemberListing from '../components/MemberListing'

import { Suspense, useEffect, useState } from 'react'
import Loading from '../loading'
import Image from 'next/image'

export default function About() {
	const [members, setMembers] = useState([])

	useEffect(() => {
		const getMembers = () => {
			fetchMembers().then((data) => {
				setMembers(data)
			})
		}
		getMembers()
	}, [])

	return (
		<div data-testid='about' className={styles.about}>
			<h2 data-testid='about-header' className={styles.aboutHeader}>
				Band Members
			</h2>
			{members &&
				members.map((member) => (
					<MemberListing key={member.name} member={member} />
				))}
			<p data-testid='band-pic' className={styles.bandPic}>
				<Suspense fallback={<Loading />}>
					<Image
						src='/uppercase2019-bandPic.png'
						alt='uppercase2019-bandPic.png'
						sizes='450vw'
						style={{
							width: '100%',
							height: 'auto'
						}}
						width={450}
						height={300}
					/>
				</Suspense>
			</p>
			<div data-testid='biography' className='biography'>
				<p>
					In 2013 the band released their debut album entitled &quot;
					<i>Time Space Warp</i>&quot;, and their first single &quot;
					<i>Balikbayan</i>&quot; caught the attention of Filipino online radio
					stations in the UK, Dubai, Manila and Toronto. They were unanimously
					voted &quot;<b>Top Band</b>&quot; at the 2013 Filipinos Making Waves
					Festival held at Dundas Square in downtown Toronto, winning over
					judges with their hit single &quot;<i>Ere</i>&quot;.
				</p>
				<p>
					In 2015 the whole band went back home to Manila and performed gigs
					around the city to promote their music. They released a sophomore EP
					album entitled &quot;<i>Bukas Makalawa</i>&quot; consisting of five
					new tracks, including the single &quot;<i>Tuldok</i>&quot; released in
					2016. They also released a Christmas single entitled &quot;
					<i>Babalik</i>&quot; on December 2, 2017 as a salute to all Overseas
					Filipino Workers and Filipino migrants around the world.
				</p>
				<p>
					The band released its top singles &quot;<i>Tanging Ikaw</i>&quot; on
					February 9, 2019, and &quot;<i>Ligaw Na Tadhana</i>&quot; on March 23,
					2023, which were featured on Spotify&apos;s New Music Friday
					Philippines playlist on their debut weeks and have enjoyed popularity
					and heavy streaming from listeners in the Philippines.
				</p>
			</div>
		</div>
	)
}
