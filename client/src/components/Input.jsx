import React, { useState, useContext } from "react";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LinkIcon from "@material-ui/icons/Link";
import API from "../utils/API"
import { ThreadContext } from "../context/ThreadContext";
import { UserContext } from "../context/UserContext";
import "../stylesheets/Input.css";

const Input = ({thread, placeholderText, parentId, handleClose}) => {
  const { handleThreadSelect } = useContext(ThreadContext)
  const {user} = useContext(UserContext)
  const [body, setBody] = useState("")

  const parent = parentId ? parentId : null

  const hanldeInputChange = (e) => {
    setBody(e.target.value)
  }

  const onCommentSubmit = async (e) => {
    e.preventDefault()
    try {
      await API.createComment({body, userId: user.user_id, threadId: thread.thread_id, parentCommentId: parent})
    } catch (err) {
      console.log(err);
    }
    handleThreadSelect(thread.thread_id)
    setBody("")
    if (handleClose) handleClose()
  }

  return (
    <>
      <Paper id="inputRoot" component="form" onSubmit={onCommentSubmit} >
        <InputBase
          autoFocus
          fullWidth
          multiline
          rows={4}
          placeholder={placeholderText}
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








