import React from "react";

export default function SideBarButton({ value, ...props }) {
  return (
    <div
      className="flex justify-center font-semibold bg-red-400 rounded-md p-2  text-lg items-center my-7 hover:cursor-pointer hover:scale-105"
      {...props}
    >
      {value}
    </div>
  );
}
