import { createSlice } from "@reduxjs/toolkit";

const showEditModalSlice = createSlice({
  name: "showModal",
  initialState: { show: false },
  reducers: {
    toggleShowModal: (state) => {
      state.show = !state.show;
    },
  },
});

export default showEditModalSlice.reducer;
export const { toggleShowModal } = showEditModalSlice.actions;
