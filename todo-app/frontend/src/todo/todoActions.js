import axios from 'axios'

const url = 'http://localhost:3001/api/todos'

export const changeDescription = (e) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex/${description}/` : ''
        const request = axios.get(`${url}?sort=-createdAt${search}`)
            .then((resp) => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const addTodo = (description) => {
    return (dispatch) => {
        axios.post(url, { description })
            .then((resp) => dispatch(clear()))
            .then((resp) => dispatch(search()))
    }
}

export const markAsDone = (task) => {
    return (dispatch) => {
        axios.put(`${url}/${task._id}`, {...task, done: true})
            .then((resp) => dispatch(search()))
    }
}

export const markAsPending = (task) => {
    return (dispatch) => {
        axios.put(`${url}/${task._id}`, {...task, done: false})
            .then((resp) => dispatch(search()))
    }
}

export const deleteTask = (task) => {
    return (dispatch) => {
        axios.delete(`${url}/${task._id}`)
            .then(dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: 'FORM_CLEAR'
    }, search()]
}