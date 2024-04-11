import { addTask,deleteTask,completeTask } from "./store/taskSlice";
import store from "./store/store";
import { addEmployee } from "./store/employee";



const unsubscribe = store.subscribe(()=>{
    console.log("Updated",store.getState());
})

store.dispatch(addTask({task : "Task 1"}))
store.dispatch(addTask({task : "Task 2"}))
console.log(store.getState())
store.dispatch(completeTask({id :1}));
store.dispatch(deleteTask({id :2}))
store.dispatch(addEmployee({name : 'Chandan'}))
console.log(store.getState())
store.dispatch({type : "SHOW_ERROR",payload : {error : "User not found" }})
unsubscribe();


