import { createContext } from "react";

export const data = {
    number: 123,
    string: 'Context API'
}

const DataContext = createContext({})
export default DataContext