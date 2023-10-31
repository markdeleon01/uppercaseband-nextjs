'use client'

import styles from './NavBar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function NavBar() {

	const pathname = usePathname()

	const resetNavLinksClass = () => {
		const navLinks = document.querySelectorAll('a')
		navLinks.forEach((navLink) => {
			navLink.className = ''
		})
	}

	const determineCurrentLink = () => {
		resetNavLinksClass()

		const navLinks = document.querySelectorAll('a')
		navLinks.forEach((navLink) => {
			const hrefValue = navLink.getAttribute('href')
			if (
				hrefValue === pathname || 
				(pathname === '' && pathname === '/')
			) {
				navLink.className = `${ styles.navLinkSelected }`
			}
		})
	}

	const highlightLink = (event) => {
		resetNavLinksClass()
		event.target.className = `${ styles.navLinkSelected }`
	}

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		determineCurrentLink()
	})


	return (
		<div data-testid='nav' className={styles.nav}>
			<Link data-testid='home-link' href='/' onClick={highlightLink}>
				Home
			</Link>
			&nbsp;|&nbsp;
			<Link data-testid='about-link' href='/about' onClick={highlightLink}>
				About
			</Link>
			&nbsp;|&nbsp;
			<Link data-testid='discography-link' href='/discography' onClick={highlightLink}>
				Discography
			</Link>
			&nbsp;|&nbsp;
			<Link data-testid='events-link' href='/events' onClick={highlightLink}>
				Events
			</Link>
		</div>
	)
}
