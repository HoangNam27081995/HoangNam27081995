import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'taskSlice',
    initialState:[],
    reducers:{
        addTodo(state,action){
            const newTodo = {
                id:action.payload.id,
                titleTask: action.payload.titleTask,
                dueDate:action.payload.dueDate,
                Priority:action.payload.Priority,
                Description:action.payload.Description,
            };
            state.push(newTodo);
        },
        deleteTodo(state,action){
            const removeTodo = action.payload;
            state = state.filter(item => item.id !== removeTodo);
            return state;
        }
    }
})
export const toDotaskSlice = taskSlice.actions;
export default taskSlice;  