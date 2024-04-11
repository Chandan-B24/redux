import {createSlice} from '@reduxjs/toolkit'

let id =0;

const employeeSlice = createSlice({
    name : "employees",
    initialState : [],
    reducers : {
        addEmployee : (state,actions) => {
            state.push({id : ++id,name:actions.payload.name})
        }
    }
})



export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;