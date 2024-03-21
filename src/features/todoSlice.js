import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload,
      };
      console.log(todo);
      console.log(action.payload);
      state.push(todo);
    },
    del: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { add, del } = todoSlice.actions;

export default todoSlice.reducer;
