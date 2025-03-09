import { createSlice,  nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo : [{
        id: "",
        task: ""
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            return state.todo?.push({task : action.payload, id: nanoid()})
        },
        removeTodo: (state, action)=>{
            return state?.todo?.filter((item)=> item.id !== action.payload)
        },
        updateTodo: (state, action)=>{
          return  state?.todo?.map((item)=> {
            if(item.id === action.payload.id) {
                return {
                    ...item, task: action?.payload?.task
                }
            }
            return item
          } )
        }
    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer