import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import Modal from "../modal/Modal";
import { toggleShowModal } from "../../utils/slice/showEditModalSlice";
import {
  deleteTask,
  markTaskComplete,
} from "../../utils/slice/addTaskDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "../modal/EditModal";

export default function TaskCard({ title, date, desc, id, completed }) {
  const showModal = useSelector((store) => store.showEditModal.show);
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <div className="bg-stone-400 m-2 p-2 w-5/6 rounded-lg">
        <div className=" flex justify-between">
          <div className="text-lg font-medium">{title}</div>
          <div className="flex justify-center items-center">
            <div className="mx-2">{completed ? "🟢" : "🔴"}</div>
            <div className=" rounded-md p-1 ">{date}</div>
          </div>
        </div>
        <div className="p-1 w-11/12">{desc}</div>
      </div>
      <div className=" flex  w-1/6 text-4xl my-5 mx-1  ">
        <MdOutlineEdit
          className="hover:cursor-pointer hover:scale-x-125"
          onClick={() => {
            dispatch(toggleShowModal());
          }}
        />
        <MdDeleteOutline
          className="hover:cursor-pointer hover:scale-x-125"
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        />
        {!completed && (
          <TiTickOutline
            className="hover:cursor-pointer hover:scale-x-125"
            onClick={() => {
              dispatch(markTaskComplete(id));
            }}
          />
        )}
      </div>
      {/* <Modal /> */}
      {showModal && <EditModal title={title} date={date} desc={desc} id={id} />}
    </div>
  );
}
