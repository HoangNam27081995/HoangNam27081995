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
                checked:false,
                checkedDetail:false
            };
            state.push(newTodo);
        },
        updateTodo(state,action){
            state.map((item) => {
                if(item.id === action.payload.id){
                     item.titleTask = action.payload.titleTask;
                     item.Description = action.payload.Description;
                     item.dueDate = action.payload.dueDate;
                     item.Priority = action.payload.Priority;
                     item.checkedDetail = false;   
                }
            })
            
        },
        deleteTodo(state,action){
            const removeTodo = action.payload;
            state = state.filter(item => item.id !== removeTodo);
            return state;
        },
        updateCheckedTodo(state, action){
            const foundCheckTodo = state.find((item) => item.id === action.payload);
            const foundIndex = state.findIndex((item) => item.id === action.payload);
            foundCheckTodo.checked = !foundCheckTodo.checked;
            state.splice(foundIndex, 1, foundCheckTodo);
        },
        updateShowupdate(state, action){
            const foundCheckTodo = state.find((item) => item.id === action.payload);
            const foundIndex = state.findIndex((item) => item.id === action.payload);
            foundCheckTodo.checkedDetail = !foundCheckTodo.checkedDetail;
            state.splice(foundIndex, 1, foundCheckTodo);
        }
        
    }
})
export const toDotaskSlice = taskSlice.actions;
export default taskSlice;  