import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
    completed: [],
  },

  reducers: {
    pushTodo: (state, action) => {
      state.todosList = [...state.todosList, action.payload]
    },
    pushCompleted: (state, action) => {
      state.completed = [...state.completed, action.payload]
    },
    completedTodo: (state, action) => {
      state.todosList = state.todosList.filter((todo) => todo.todo !== action.payload.todo)
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushTodo, pushCompleted, completedTodo } = counterSlice.actions

const slice = counterSlice.reducer
export default slice
