import { createSlice } from "@reduxjs/toolkit";

const addTaskSlice = createSlice({
  name: "addTask",
  initialState: { addTaskStateValue: false },
  reducers: {
    toogleAddTask: (state) => {
      state.addTaskStateValue = !state.addTaskStateValue;
    },
  },
});

export default addTaskSlice.reducer;
export const { toogleAddTask } = addTaskSlice.actions;
