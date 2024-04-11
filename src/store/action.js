
import {createAction} from '@reduxjs/toolkit'


export const addTask = createAction("ADD_TASK");
export const deleteTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

// console.log(test({task : "Task 1"}));


// export const addTask = (task) => {
//     return {type : actionTypes.ADD_TASK, payload : {task : task }}
// }


// export const deleteTask = (id) => {
//     return {type : actionTypes.REMOVE_TASK, payload : {id}}
// }

// export const completeTask = (id) => {
//     return {type : actionTypes.COMPLETE_TASK,payload : {id}}
// }

export const fetchTodo = () =>{
    return async function (dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const task = await res.json()
        dispatch(addTask(task.title))
    }
}