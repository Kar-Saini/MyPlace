import React from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { toogleAddTask } from "../../utils/slice/addTaskSlice";
import AddTask from "./AddTask";

export default function MainContainer() {
  const addTaskState = useSelector(
    (store) => store.addTaskState.addTaskStateValue
  );
  const taskDetails = useSelector(
    (store) => store.addTaskDetails.addTaskDetails
  );
  const dispatch = useDispatch();
  return (
    <div className="w-7/12 h-full p-2 m-1 rounded-lg bg-indigo-300">
      <div className="flex items-center justify-center border-b-2 ">
        <input
          type="text"
          className="rounded-lg p-2 my-4 w-3/5 text-lg text-center "
          placeholder="Search your tasks"
        />
      </div>
      <div
        className="text-xl m-2 p-3 bg-slate-300 flex items-center justify-center rounded-lg w-2/12 hover:cursor-pointer hover:scale-105"
        onClick={() => {
          dispatch(toogleAddTask());
        }}
      >
        {addTaskState ? "Back" : "Add Task"}
      </div>
      {addTaskState ? (
        <AddTask />
      ) : (
        <div className="my-4 items-center h-[70%] justify-center overflow-y-scroll">
          {taskDetails.map((ele) => (
            <TaskCard
              key={ele.taskID}
              title={ele.taskTitle}
              date={ele.taskDate}
              desc={ele.taskDesc}
              completed={ele.completed}
              id={ele.taskID}
            />
          ))}
        </div>
      )}
    </div>
  );
}
