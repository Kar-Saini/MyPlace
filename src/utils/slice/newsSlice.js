import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { news: [], showNews: false },
  reducers: {
    addNews: (state, action) => {
      state.news.push(action.payload);
    },
    toogleNews: (state) => {
      state.showNews = !state.showNews;
    },
  },
});

export default newsSlice.reducer;
export const { addNews, toogleNews } = newsSlice.actions;
