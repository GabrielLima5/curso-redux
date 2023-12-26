import { MAX_ALTERADO, MIN_ALTERADO } from "./actionTypes"

// action creator
function alterarMin(newMin){
    return {
        type: MIN_ALTERADO,
        payload: +newMin
    }
}

function alterarMax(newMax){
    return {
        type: MAX_ALTERADO,
        payload: +newMax
    }
}

export {
    alterarMax, alterarMin
}