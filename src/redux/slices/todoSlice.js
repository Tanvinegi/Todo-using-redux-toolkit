import { createSlice,  nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo : []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
        state.todo.push({ task: action.payload, id: nanoid() });
        },
        removeTodo: (state, action)=>{
          state.todo = state.todo.filter((item)=> item.id !== action.payload)
        },
        isEdit: (state, action)=>{
            state.todo = state?.todo?.map((item)=> {
                if(item.id === action?.payload) {
                    return{
                        ...item,
                        isEdit:  true
                    }
                }
                return item
            })
        },
        updateTodo: (state, action)=>{
            state.todo = state?.todo?.map((item)=> {
            if(item.id === action.payload.id) {
                return {
                    ...item, task: action?.payload?.task, isEdit: false
                }
            }
            return item
          } )
        }
    }
})

export const {addTodo, updateTodo, isEdit, removeTodo} = todoSlice.actions

export default todoSlice.reducer