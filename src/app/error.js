'use client' // Error components must be Client Components

import ErrorDisplay from './components/ErrorDisplay'

// this root fallback component will be rendered within the root layout 
// which includes globally-shared UI and branding
export default function Error({ error, reset }) {

	// You can add any UI inside Error, including a Skeleton.
	return (
        <ErrorDisplay error={error} reset={reset} />
    )
}
