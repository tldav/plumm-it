import React from "react";
import RandoBox from "../components/RandoBox";
import ThreadBox from "../components/ThreadBox";

const Home = () => {
  return (
    <div className="app-container ">
      <div className="left"></div>
      <div className="mid">
        <div className="threads">
          <ThreadBox />
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

export default Home;
