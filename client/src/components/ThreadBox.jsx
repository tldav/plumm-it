import React, { useContext } from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/ThreadBox.css";
import Context from "../context";

const ThreadBox = () => {
  let history = useHistory();

  const {
    value: {
      threads,
      realThreads,
      actions: { setFeaturedThread },
    },
  } = useContext(Context);

  console.log(realThreads);

  const redirectToThread = (thread) => {
    const path = thread.title.replace(/ /g, "_");
    setFeaturedThread(thread);
    history.push(path);
  };

  return (
    <>
      {threads.map((thread) => (
        <div
          key={thread.id}
          {...thread}
          onClick={() => redirectToThread(thread)}
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

export default ThreadBox;
