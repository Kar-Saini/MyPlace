import React from "react";
import SideBarButton from "./SideBarButton";
import { Ri24HoursLine } from "react-icons/ri";
import { toogleNews } from "../../utils/slice/newsSlice";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="bg-pink-300 w-2/12 h-full rounded-lg p-2 m-1 ">
      <div className="flex my-2 h-1/12 border-b-2 border-gray-300 justify-center ">
        <div>
          <Ri24HoursLine className="text-6xl text-indigo-900 " />
        </div>
        <div>
          <h1 className="text-3xl font-bold my-4 mx-3 italic">MyPlace</h1>
        </div>
      </div>
      <div className="text-3xl font-serif font-medium italic p-1 my-5 flex justify-center">
        Hi, Kartik
      </div>
      <div className="border-b-2">
        <SideBarButton value="HOME" />
        <SideBarButton value="TASKS" />
      </div>
      <div>
        <SideBarButton
          value="NEWS"
          onClick={() => {
            dispatch(toogleNews());
          }}
        />
        <SideBarButton value="YOUTUBE" />
        <SideBarButton value="MUSIC" />
      </div>
    </div>
  );
}
