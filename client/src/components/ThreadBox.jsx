import React, { useContext, useEffect } from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/ThreadBox.css";
import { ThreadContext } from "../context/ThreadContext";
import useRenderCount from "../hooks/useRenderCount";
const dateFormat = require("dateformat");

const ThreadBox = () => {
  let history = useHistory();

  const {realThreads, handleThreadSelect } = useContext(ThreadContext)

  useRenderCount("ThreadBox.jsx")

  useEffect(() => {}, [realThreads]);

  const redirectToThread = async (thread) => {
    await handleThreadSelect(thread.thread_id)
    const path = `p/${thread.category_name}/${thread.thread_id}/${thread.title.replace(/ /g, "_")}`;
    history.push(path);
  };

  return (
    <>
      {realThreads.map((thread) => (
        <div
          key={thread.thread_id}
          {...thread}
          onClick={() => redirectToThread(thread)}
          className="stage"
          id="preview"
        >
          <div id="threadHeader">
            <Avatar
              id="avatar"
              src={`/static/images/${thread.category_name}.jpg`}
              alt={`${thread.category_name} image`}
            />
            <span id="category">p/{thread.category_name}</span>
            <span id="user">{`• ${thread.username} ${dateFormat(
              thread.created_at,
              "dddd, mmmm dS, yyyy, h:MM TT"
            )}`}</span>
          </div>
          <h2 className="thread-title">{thread.title}</h2>
          <div className="fade-text-or-whatever">
            <p>{thread.body}</p>
          </div>
          <div id="iconDiv">
            <Upvote upvotes={thread.upvotes} />
            <Downvote downvotes={thread.downvotes} />
            <CommentIcon comments={thread.comment_count} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ThreadBox;
