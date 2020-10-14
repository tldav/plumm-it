import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "../stylesheets/Upvote.css";

const Upvote = ({ upvotes, onClick }) => {
  return (
    <>
      <ArrowUpwardIcon className="icon" fontSize="small" onClick={onClick} />
      <span className="iconCount">{upvotes}</span>
    </>
  );
};

export default Upvote;
