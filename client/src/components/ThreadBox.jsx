import React from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { useHistory, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/ThreadBox.css";

const ThreadBox = ({ threads, onClick }) => {
  let history = useHistory();

  const handleClick = (thread) => {
    let threadRoute = `/p/${thread.category}/${thread.title
      .trim()
      .split(" ")
      .join("_")}`;
    onClick(thread, threadRoute);
    history.push(`${threadRoute}`);
  };

  return (
    <>
      {threads.map((thread) => (
        <div
          key={thread.id}
          {...thread}
          onClick={() => handleClick(thread)}
          className="stage"
          id="preview"
        >
          <div id="threadHeader">
            <Avatar id="avatar" src={`/static/images/${thread.category}.jpg`} />
            <span id="category">p/{thread.category}</span>
            <span id="user">{`• ${thread.author} ${thread.date}`}</span>
          </div>
          <h3>{thread.title}</h3>
          <p>{thread.body}</p>
          <div id="iconDiv">
            <Upvote upvotes={thread.upvotes} />
            <Downvote downvotes={thread.downvotes} />
            <CommentIcon comments={thread.comments} />
          </div>
        </div>
      ))}
    </>
  );
};

export default withRouter(ThreadBox);
