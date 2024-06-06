import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
        state.push({
          id: Date.now(),
          title: action.payload.title,
          description: action.payload.description,
          status: 'todo'
        });
      },
      deleteTodo: (state, action) => {
        return state.filter(item => item.id !== action.payload.todoId);
      },
      changeTodoStatus: (state, action) => {
        const {id, newTodoStatus} = action.payload;
        const todoToUpdate = state.find(item => item.id === id);
        if (todoToUpdate) {
            todoToUpdate.status = newTodoStatus;
        }
      },
   },
});
export const {
    addTodo,
    deleteTodo,
    changeTodoStatus
} = todoSlice.actions;