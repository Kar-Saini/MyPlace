import React from "react";

export default function NewsCard({ image, title, date, description }) {
  return (
    <div className="rounded-md m-2 p-2 bg-gray-200">
      <img src={image} alt="" />
      <div className=" justify-between">
        <div className="font-semibold">{title}</div>
        <div>{date}</div>
      </div>
      <div>{description}</div>
    </div>
  );
}
