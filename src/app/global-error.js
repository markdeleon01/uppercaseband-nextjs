'use client'

import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

// "catch-all" error handling of the entire application;
// fallback component replaces the root layout when active
export default function GlobalError({ error, reset }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main data-testid='main' className='main'>
					<NavBar />
					<div data-testid='page-header' className='pageHeader'>
						<h1>U P P E R C A S E</h1>
					</div>
					<div data-testid='page-error' className='pageError'>
						<h2>Something went wrong!</h2>
						<p>{error.message}</p>
						<button onClick={() => reset()}>Try again</button>
					</div>
				</main>
			</body>
		</html>
	)
}
