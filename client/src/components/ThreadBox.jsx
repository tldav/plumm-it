import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import { Avatar } from "@material-ui/core";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";

const ThreadBox = ({thread}) => {
  let history = useHistory();

  const { handleThreadSelect } = useContext(ThreadContext)

  const redirectToThread = (selectedThread) => {
    handleThreadSelect(selectedThread.thread_id)
    const path = `/p/${selectedThread.category_name}/${selectedThread.category_id}/${selectedThread.title.replace(/ /g, "_")}/${selectedThread.thread_id}`;
    history.push(path);
  };

  return (
    <>
      <div
        // {...thread}    @nick what dis do?
        onClick={() => redirectToThread(thread)}
        className="stage"
        id="preview"
      >
        <div className="thread-header">
          <Avatar
            id="avatar"
            src={`/static/images/${thread.category_name}.jpg`}
            alt={`${thread.category_name} image`}
          />
          <span className="category">p/{thread.category_name}</span>
          <span>{`• ${thread.username} • ${dateFormat(
            thread.created_at,
            "mmmm dS, yyyy, h:MM TT"
          )}`}</span>
        </div>
        <h2 className="thread-title">{thread.title}</h2>
        <div className="fade-text-or-whatever">
          <p>{thread.body}</p>
        </div>
        <div id="iconDiv">
          <Upvote upvotes={thread.upvotes} />
          <Downvote downvotes={thread.downvotes} />
          <CommentIcon commentCount={thread.comment_count} />
        </div>
      </div>
    </>
  );
};

export default ThreadBox;
