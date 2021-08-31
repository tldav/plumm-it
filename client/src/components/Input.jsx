import React, { useState, useContext } from "react";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LinkIcon from "@material-ui/icons/Link";
import API from "../utils/API"
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/Input.css";

const Input = ({thread, user}) => {
  const { handleThreadSelect } = useContext(ThreadContext)
  const [body, setBody] = useState("")

  const hanldeInputChange = (e) => {
    setBody(e.target.value)
  }

  const onCommentSubmit = async (e) => {
    e.preventDefault()
    try {
      await API.createComment({body, userId: user.user_id, threadId: thread.thread_id})
    } catch (err) {
      console.log(err);
    }
    handleThreadSelect(thread.thread_id)
    setBody("")
  }

  return (
    <>
      <Paper id="inputRoot" component="form" onSubmit={onCommentSubmit} >
        <InputBase
          autoFocus
          fullWidth
          multiline
          rows={4}
          placeholder="Leave a Comment"
          onChange={hanldeInputChange}
          value={body}
          required
        />
        <IconButton>
          <LinkIcon />
        </IconButton>
        <Divider id="divider" orientation="vertical" />
        <IconButton type="submit">
          <ChatBubbleIcon  />
        </IconButton>
      </Paper>
    </>
  );
};

export default Input;
