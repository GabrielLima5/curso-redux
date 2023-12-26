import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const mergeStrings = (str1, str2) => {
        return [...str1].map((e, i) => {
            return `${e}${str2[i] || ''}`
        }).join('')
    }

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const count = useRef(0)
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    useEffect(() => {
        count.current = count.current + 1
        inputRef2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current++
        inputRef1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergeStrings(value1, value2)} </span>
                    <span className="text red">[{count.current}]</span>
                </div>
                <input type="text" ref={inputRef1} className="input" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <input type="text" ref={inputRef2} className="input" value={value2} onChange={(e) => setValue2(e.target.value)} />
            </div>

        </div>
    )
}

export default UseRef
