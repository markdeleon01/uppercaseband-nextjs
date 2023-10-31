const getMembers = async function() {
    const response = await fetch(
        'https://my-json-server.typicode.com/markdeleon01/uppercaseband-nextjs/members'
    )
    const resData = await response.json()
    return resData
}

export const fetchMembers = getMembers
