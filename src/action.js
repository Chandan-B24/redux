import * as actionTypes from './actionTypes'

export const addTask = (task) => {
    return {type : actionTypes.ADD_TASK, payload : {task : task }}
}


export const deleteTask = (id) => {
    return {type : actionTypes.REMOVE_TASK, payload : {id}}
}

export const completeTask = (id) => {
    return {type : actionTypes.COMPLETE_TASK,payload : {id}}
}

export const fetchTodo = () =>{
    return async function (dispatch,getState) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const task = await res.json()
        dispatch(addTask(task.title))
    }
}