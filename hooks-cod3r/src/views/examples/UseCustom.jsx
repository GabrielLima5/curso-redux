import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const { count, inc, dec } = useCounter(1000)
    const { data } = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={dec}>-1</button>
                    <button className="btn" onClick={inc}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <h1>Estados brasileiros</h1>
                <ul>
                    {data?.map(state => (
                        <li key={state.nome}>{state.nome} - {state.sigla}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
