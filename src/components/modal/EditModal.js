import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShowModal } from "../../utils/slice/showEditModalSlice";
import { updateTask } from "../../utils/slice/addTaskDetailsSlice";

export default function EditModal({ title, date, desc, id }) {
  const [editState, setEditState] = useState({
    taskTitle: title,
    taskDate: date,
    taskDesc: desc,
  });
  const dispatch = useDispatch();
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-slate-300 bg-opacity-60">
      <div className="bg-stone-400 w-1/3 h-1/2 rounded-lg m-2 p-2">
        <div className="flex justify-end m-1">
          <button
            onClick={() => {
              dispatch(toggleShowModal());
            }}
            className="bg-slate-200 rounded-lg p-[2px] hover:cursor-pointer hover:scale-105"
          >
            ✖️
          </button>
        </div>
        <div className="flex m-2 p-2">
          <h2 className=" p-1 font-semibold">Title</h2>
          <input
            type="text"
            className="rounded-lg p-1 mx-1"
            value={editState.taskTitle}
            onChange={(e) => {
              setEditState((prevState) => {
                return { ...prevState, taskTitle: e.target.value };
              });
            }}
          />
        </div>
        <div className="flex m-2 p-2">
          <h2 className="p-1 font-semibold">Description</h2>
          <textarea
            value={editState.taskDesc}
            cols="30"
            rows="5"
            className="rounded-lg p-1 mx-1"
            onChange={(e) => {
              setEditState((prevState) => {
                return { ...prevState, taskDesc: e.target.value };
              });
            }}
          ></textarea>
        </div>
        <div className="flex m-2 p-2">
          <h2 className="font-semibold p-1">Date</h2>
          <input
            type="date"
            value={editState.taskDate}
            className="rounded-lg p-1 mx-1"
            onChange={(e) => {
              setEditState((prevState) => {
                return { ...prevState, taskDate: e.target.value };
              });
            }}
          />
        </div>
        <div className="m-2 p-2">
          <button
            onClick={() => {
              dispatch(
                updateTask({ taskID: id, ...editState, completed: false })
              );
              dispatch(toggleShowModal());
            }}
            className="p-1 font-semibold bg-stone-500 rounded-lg text-white hover:cursor-pointer hover:scale-105"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
