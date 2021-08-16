import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import { Avatar } from "@material-ui/core";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";
// import useRenderCount from "../hooks/useRenderCount";

const ThreadBox = () => {
  let history = useHistory();

  const {realThreads, handleThreadSelect } = useContext(ThreadContext)


  // un-comment to track number of re-renders
  // useRenderCount("ThreadBox.jsx")

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
