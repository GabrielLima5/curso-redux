import { useEffect, useState } from "react"

export const useFetch = (url, method = 'GET', dataToSend = null) => {
    const [data, setData] = useState([])
    const [options, setOptions] = useState({method})

    if (method === 'POST'){
        setOptions({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        })
    }

    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then(json => setData(json))
    }, [url, method])

    return { data }
}