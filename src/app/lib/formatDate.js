const formatDate = function (value) {
    const date = new Date(value)
    return date.toLocaleString(['en-US'], {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export default formatDate