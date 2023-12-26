import { useState } from "react"

export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    const inc = () => {
        setCount(count => count+1)
    }

    const dec = () => {
        setCount(count => count-1)
    }
    
    return {
        inc, dec, count
    }
}   