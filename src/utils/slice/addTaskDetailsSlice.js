import { createSlice } from "@reduxjs/toolkit";

const addTaskDetailsSlice = createSlice({
  name: "addTaskDetails",
  initialState: { addTaskDetails: [] },
  reducers: {
    addTaskDetailsOnSave: (state, action) => {
      state.addTaskDetails.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.addTaskDetails = state.addTaskDetails.filter(
        (ele) => ele.taskID !== action.payload
      );
    },
    markTaskComplete: (state, action) => {
      state.addTaskDetails.map((ele) => {
        if (ele.taskID === action.payload) {
          ele.completed = true;
        }
        return state.addTaskDetails;
      });
    },
    updateTask: (state, action) => {
      state.addTaskDetails = state.addTaskDetails.filter(
        (ele) => ele.taskID !== action.payload.taskID
      );
      state.addTaskDetails.push(action.payload);
    },
  },
});

export default addTaskDetailsSlice.reducer;
export const {
  addTaskDetailsOnSave,
  deleteTask,
  updateTask,
  markTaskComplete,
} = addTaskDetailsSlice.actions;
