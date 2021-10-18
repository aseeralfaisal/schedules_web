import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
    completed: [],
    searchInput: '',
    theme: '',
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
    onChangeSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushTodo, onChangeSearchInput, pushCompleted, completedTodo, setTheme } = counterSlice.actions

const slice = counterSlice.reducer
export default slice
