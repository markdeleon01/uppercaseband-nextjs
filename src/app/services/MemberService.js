import axios from 'axios'

const getMembers = async function () {
	const resp = await axios
        .get(
            'https://my-json-server.typicode.com/markdeleon01/uppercaseband-nextjs/members'
        )
    return resp.data
}

export const fetchMembers = getMembers
