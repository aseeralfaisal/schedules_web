import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
  },

  reducers: {
    pushTodo: (state, action) => {
      state.todosList = [...state.todosList, action.payload]
    },
    deleteTodo: (state, action) => {
      state.todosList = state.todosList.filter((todo) => todo !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushTodo, deleteTodo } = counterSlice.actions

const slice = counterSlice.reducer
export default slice
