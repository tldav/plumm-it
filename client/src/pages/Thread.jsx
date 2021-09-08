import React from "react";
import FeaturedThreadContent from "../components/FeaturedThreadContent";
import RandoBox from "../components/RandoBox";

const Thread = () => {
  return (
    <div className="app-container ">
      <div className="mid">
        <div className="threads">
          <FeaturedThreadContent />
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

export default Thread;
