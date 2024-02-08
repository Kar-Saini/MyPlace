import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import News from "../news/News";

export default function Homepage() {
  return (
    <div className="w-11/12 p-2 h-[90%] mx-auto rounded-3xl bg-orange-200 flex">
      <Sidebar />
      <MainContainer />
      <News />
    </div>
  );
}
