import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  todos: [],
  filters: {
    status: 'All',
    colors: [],
  },
  inputText: '',
};

// Create todos slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        color: '',
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeColor: (state, action) => {
      const { id, color } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.color = color;
      }
    },
    setStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    toggleColorFilter: (state, action) => {
      const color = action.payload;
      const index = state.filters.colors.indexOf(color);
      if (index === -1) {
        state.filters.colors.push(color);
      } else {
        state.filters.colors.splice(index, 1);
      }
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    markAllCompleted: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  changeColor,
  setStatusFilter,
  toggleColorFilter,
  setInputText,
  markAllCompleted,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;