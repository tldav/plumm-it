import React from "react";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Downvote = ({ onClick }) => {
  return (
    <IconButton size="small" id="downvote" title="downvote">
      <FontAwesomeIcon  icon={faArrowDown}/>
    </IconButton>
  );
};

export default Downvote;
