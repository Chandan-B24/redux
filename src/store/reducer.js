import {createReducer} from '@reduxjs/toolkit'

let id = 0; 


export default createReducer([],(builder) => {
    builder
     .addCase("ADD_TASK" ,(state,action) => {
        state.push({
            id: ++id, 
            task: action.payload.task,
            completed: false
        })})

    .addCase("REMOVE_TASK",(state,action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state.splice(index,1);
    },
    ) 
     .addCase("COMPLETE_TASK" ,(state,action) => {
        const index = state.findIndex(task => task.id === action.payload.id);
        state[index].completed = true;
    }
    ) 
})


