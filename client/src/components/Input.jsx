import React from "react";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LinkIcon from "@material-ui/icons/Link";
import "../stylesheets/Input.css";

const Input = () => {
  return (
    <>
      <Paper id="inputRoot" component="form">
        <InputBase
          fullWidth
          multiline
          rows={4}
          placeholder="Leave a Comment"
        />
        <IconButton>
          <LinkIcon />
        </IconButton>
        <Divider id="divider" orientation="vertical" />
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default Input;
