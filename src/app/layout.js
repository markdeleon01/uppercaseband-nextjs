import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from './components/NavBar'

import { Suspense } from 'react'
import Loading from './loading'
import Error from './error'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'U P P E R C A S E',
	description: 'U P P E R C A S E'
}

export default function RootLayout({ children }) {

	return (
		<html lang='en'>
			<body className={inter.className}>
				<main data-testid='main' className='main'>
					<NavBar />
					<div data-testid='page-header' className='pageHeader'>
						<h1>U P P E R C A S E</h1>
					</div>
					<div data-testid='page-section' className='pageSection'>
						<ErrorBoundary fallback={ <Error /> }>
							<Suspense fallback={ <Loading /> }>
								{children}
							</Suspense>
						</ErrorBoundary>
					</div>
				</main>
			</body>
		</html>
	)
}
