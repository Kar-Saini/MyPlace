import React from "react";

export default function Modal() {
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-stone-400 w-3/12 h-1/6 rounded-lg p-2 ">
        <div className="flex justify-end">
          <button className="justify-end bg-slate-200 rounded-md hover:cursor-pointer hover:scale-105">
            ✖️
          </button>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, autem.
        </div>
      </div>
    </div>
  );
}
