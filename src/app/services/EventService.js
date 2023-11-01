import axios from 'axios'

const getEvents = async function () {
	const resp = await axios
		.get(
			'https://my-json-server.typicode.com/markdeleon01/uppercaseband-nextjs/events'
		)
	return resp.data
}

export const fetchEvents = getEvents
