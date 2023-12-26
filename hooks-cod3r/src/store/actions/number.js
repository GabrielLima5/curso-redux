export function numberAdd2(dispatch){
    dispatch({type: 'number_add2'})
}

export function numberMultiply7(dispatch){
    dispatch({type: 'number_multiply7'})
}

export function numberDivide25(dispatch){
    dispatch({type: 'number_divide25'})
}

export function numberParser(dispatch){
    dispatch({type: 'number_parser'})
}

export function numberAddN(dispatch, n){
    dispatch({type: 'number_addn', payload: n})
}