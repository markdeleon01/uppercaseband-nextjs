import axios from 'axios'

const getDiscography = async function () {
	const resp = await axios
        .get(
            'https://my-json-server.typicode.com/markdeleon01/uppercaseband-nextjs/discography'
        )
    return resp.data
}

export const fetchDiscography = getDiscography
