import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, numberDivide25, numberMultiply7, numberAddN, numberParser } from '../../store/actions/number'
import { login } from '../../store/actions/user'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [n, setN] = useState(1)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Sem usuário</span>
                )}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => login(dispatch)}>Login</button>
                    <button className="btn" onClick={() => numberMultiply7(dispatch)}>* 7</button>
                    <button className="btn" onClick={() => numberDivide25(dispatch)}>/ 25</button>
                    <button className="btn" onClick={() => numberParser(dispatch)}>Parser</button>
                    <button className="btn" onClick={() => numberAddN(dispatch, n)}>Adicionar + {n}</button>
                </div>
                <input className="input" type="number" value={n} onChange={e => setN(e.target.value)} />
            </div>
        </div>
    )
}

export default UseReducer
