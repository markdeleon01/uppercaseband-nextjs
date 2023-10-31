const getEvents = async function () {
	const response = await fetch(
		'https://my-json-server.typicode.com/markdeleon01/uppercaseband-nextjs/events'
	)
	const resData = await response.json()
	return resData
}

export const fetchEvents = getEvents
