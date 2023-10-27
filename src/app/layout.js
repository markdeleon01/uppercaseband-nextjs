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
				<main className='main'>
					<NavBar />
					<h1>U P P E R C A S E</h1>
					<ErrorBoundary fallback={ <Error /> }>
						<Suspense fallback={ <Loading /> }>
							{children}
						</Suspense>
					</ErrorBoundary>
				</main>
			</body>
		</html>
	)
}
