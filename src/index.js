import { addTask, completeTask, deleteTask,fetchTodo } from "./action";
import store from "./store";


const unsubscribe = store.subscribe(()=>{
    console.log("Updated",store.getState());
})

store.dispatch(addTask('Task 1'))
store.dispatch(addTask('Task 2'))
console.log(store.getState())
store.dispatch(completeTask(1));
store.dispatch(deleteTask(1))
store.dispatch(fetchTodo())
console.log(store.getState())
unsubscribe();
