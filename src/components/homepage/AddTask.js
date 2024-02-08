import React, { useRef, useState } from "react";
import { addTaskDetailsOnSave } from "../../utils/slice/addTaskDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toogleAddTask } from "../../utils/slice/addTaskSlice";
const initialState = {
  taskTitle: "",
  taskDesc: "",
  taskTags: "",
  taskDate: "",
};
export default function AddTask() {
  const addTaskState = useSelector(
    (store) => store.addTaskState.addTaskStateValue
  );
  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState(initialState);
  console.log(taskState);
  return (
    <div className="bg-pink-400 w-9/12  mx-auto my-[5%] h-2/3 rounded-md">
      <div className="flex ">
        <h2 className="font-semibold text-xl p-2 m-2">Task</h2>
        <input
          type="text"
          className=" rounded-lg m-2 p-2"
          value={taskState.taskTitle}
          onChange={(e) => {
            setTaskState((prevSate) => {
              return { ...prevSate, taskTitle: e.target.value };
            });
          }}
        />
      </div>
      <div className="flex">
        <h2 className="font-semibold text-xl p-2 m-2">Description</h2>
        <textarea
          cols="50"
          rows="5"
          className="rounded-lg m-2 p-2"
          value={taskState.taskDesc}
          onChange={(e) => {
            setTaskState((prevSate) => {
              return { ...prevSate, taskDesc: e.target.value };
            });
          }}
        ></textarea>
      </div>
      <div className="flex">
        <h2 className="font-semibold text-xl p-2 m-2">Tags</h2>
        <input
          type="text"
          name=""
          id=""
          className="rounded-lg m-2 p-2"
          value={taskState.taskTags}
          onChange={(e) => {
            setTaskState((prevSate) => {
              return { ...prevSate, taskTags: e.target.value };
            });
          }}
        />
      </div>
      <div className="flex">
        <h2 className="font-semibold text-xl p-2 m-2">Date</h2>
        <input
          type="date"
          name=""
          id=""
          className="rounded-lg m-2 p-2"
          value={taskState.taskDate}
          onChange={(e) => {
            setTaskState((prevSate) => {
              return { ...prevSate, taskDate: e.target.value };
            });
          }}
        />
      </div>
      <div className="m-2 p-2">
        <button
          className="text-lg font-medium bg-gray-400 rounded-lg hover:scale-110 hover:cursor-pointer p-2 m-1"
          onClick={() => {
            setTaskState(initialState);
          }}
        >
          Clear
        </button>
        <button
          className="text-lg font-medium bg-gray-400 rounded-lg hover:scale-110 hover:cursor-pointer p-2"
          onClick={() => {
            dispatch(
              addTaskDetailsOnSave({
                ...taskState,
                taskID: Math.random(),
                completed: false,
              })
            );
            setTaskState(initialState);
            dispatch(toogleAddTask());
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
