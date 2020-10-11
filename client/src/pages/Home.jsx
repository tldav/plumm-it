import React from "react";
import RandoBox from "../components/RandoBox";
import ThreadContainer from "../containers/ThreadContainer";

const Home = () => {
  return (
    <div className="app-container ">
      <div className="left"></div>
      <div className="mid">
        <div className="threads">
          <ThreadContainer />
        </div>
      </div>
      <div className="right">
        <div className="boxes">
          <RandoBox />
          <RandoBox />
          <RandoBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
