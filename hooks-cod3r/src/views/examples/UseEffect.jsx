import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [num2, setNum2] = useState(0)
    const [evenOrOdd, setEvenOrOdd] = useState('Par')

    function calcFatorial(num){
        if (num < 0) return -1
        if (num === 0) return 1
        return calcFatorial(num-1) * num
    }

    function calcEvenOrOdd(num){
        if (num % 2 === 0) return 'Par'
        if (num % 2 !== 0) return 'Ímpar'
    }

    useEffect(() => {
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(() => {
        setEvenOrOdd(calcEvenOrOdd(num2))
    }, [num2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>

                <input type="number" className="input" value={num} onChange={(e) => setNum(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <div>
                    <span className="text">{num2} é </span>
                    <span className="text red">{evenOrOdd}</span>
                </div>
                <input type="text" className="input" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
