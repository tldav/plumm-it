import React, { useContext } from "react";
import Banner from "../components/Banner";
import RandoBox from "../components/RandoBox";
import ThreadList from "../components/ThreadList";
import { ThreadContext } from "../context/ThreadContext";

const Category = () => {
  const { categoryThreads } = useContext(ThreadContext)
  
  return (
    <div className="app-container ">
      <div className="left"></div>
      <div className="mid">
        <div className="threads">
          <Banner />
          <ThreadList threads={categoryThreads} />
        </div>
      </div>
      <div className="right">
        <div className="boxes">
          <RandoBox />
        </div>
      </div>
    </div>
  );
};

export default Category;
