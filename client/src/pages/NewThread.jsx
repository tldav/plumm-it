import React from "react";
import NewThreadForm from "../components/NewThreadForm";
import RandoBox from "../components/RandoBox";



const NewThread = () => {
  
  return (
    <div className="app-container ">
      <div className="left"></div>
      <div className="mid">
        <div className="threads">
          <NewThreadForm />
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

export default NewThread;
