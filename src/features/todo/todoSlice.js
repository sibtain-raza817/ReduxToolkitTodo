import {createSlice, nanoid} from "@reduxjs/toolkit"

const intitialState = {
    todos : [{id: 1, text : "hello world"}]
}

export const createSlice = createSlice({
    name: "todo",
    intitialState,

    reducers: {
        addTodo : (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) =>{
            state.todo = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer