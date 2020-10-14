import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Downvote = ({ downvotes, onClick }) => {
  return (
    <>
      <ArrowDownwardIcon className="icon" fontSize="small" onClick={onClick} />
      <span className="iconCount">{downvotes}</span>
    </>
  );
};

export default Downvote;
