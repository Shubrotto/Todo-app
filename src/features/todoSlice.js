import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: uuidv4(), title: action.payload });
    },
    del: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    edit: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { add, del, edit } = todoSlice.actions;

export default todoSlice.reducer;
