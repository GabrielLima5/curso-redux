export function numberReducer(state, action){
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2}

        case 'number_multiply7':
            return {...state, number: state.number * 7}

        case 'number_divide25':
            return {...state, number: state.number / 25}

        case 'number_parser':
            return {...state, number: parseInt(state.number)}

        case 'number_addn':
            return {...state, number: state.number + parseInt(action.payload)}

        default:
            return state
    }
}
