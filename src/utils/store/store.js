import { configureStore } from "@reduxjs/toolkit";
import addTaskStateReducer from "../slice/addTaskSlice";
import addTaskDetailsReducer from "../slice/addTaskDetailsSlice";
import showEditModalReducer from "../slice/showEditModalSlice";
import newsReducer from "../slice/newsSlice";
const appStore = configureStore({
  reducer: {
    addTaskState: addTaskStateReducer,
    addTaskDetails: addTaskDetailsReducer,
    showEditModal: showEditModalReducer,
    news: newsReducer,
  },
});
export default appStore;
