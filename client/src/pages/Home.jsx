import React, { useContext } from "react";
import RandoBox from "../components/RandoBox";
import ThreadList from "../components/ThreadList";
import LoggedOutBanner from "../components/LoggedOutBanner"
import { ThreadContext } from "../context/ThreadContext";

const Home = () => {
  const { realThreads } = useContext(ThreadContext)
  return (
    <div className="app-container ">
      <div className="left"></div>
      <div className="mid">
        <div className="threads">
          <LoggedOutBanner />
          <ThreadList threads={realThreads} />
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
