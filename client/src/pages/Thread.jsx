import React from "react";
import FeaturedThreadBox from "../components/FeaturedThreadBox";
import RandoBox from "../components/RandoBox";

const Thread = () => {
  return (
    <div className="app-container ">
      <div className="mid">
        <div className="threads">
          <FeaturedThreadBox />
        </div>
      </div>
      <div className="right">
        <div className="boxes">
          <RandoBox />
          <RandoBox />
        </div>
      </div>
    </div>
  );
};

export default Thread;
