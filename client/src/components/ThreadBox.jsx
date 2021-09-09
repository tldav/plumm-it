import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import formatNum from "../utils/formatNum"
import { ThreadContext } from "../context/ThreadContext";
import API from "../utils/API"
import "../stylesheets/ThreadBox.css";
import { UserContext } from "../context/UserContext";

const ThreadBox = ({thread}) => {
  const { handleThreadSelect } = useContext(ThreadContext)
  const {user, isLoggedIn} = useContext(UserContext)
  let history = useHistory();

  const redirectToThread = (selectedThread) => {
    handleThreadSelect(selectedThread.thread_id)
    const path = `/p/${selectedThread.category_name}/${selectedThread.category_id}/${selectedThread.title.replace(/ /g, "_")}/${selectedThread.thread_id}`;
    history.push(path);
  };

  return (
      <div
        onClick={() => redirectToThread(thread)}
        className="stage"
        id="preview"
        title={thread.title}
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
        <div className="thread-fade-text">
          <p>{thread.body}</p>
        </div>
        <div className="icons icons-horizontal">
          <Upvote thread={thread} />
          {/* <span className="">{formatVotes(thread.upvotes, thread.downvotes)}</span> */}
          <span className="">{formatNum(thread.votes)}</span>
          <Downvote thread={thread} />
          <ChatBubbleIcon fontSize="small" />
          <span className="">{formatNum(thread.comment_count)} comments</span>
        </div>
      </div>
  );
};

export default ThreadBox;