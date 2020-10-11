import React from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import Comment from "../components/Comment";
import "../stylesheets/ThreadBox.css";

const ThreadBox = ({ threads }) => {
  return (
    <>
      {threads.map((thread) => (
        <div key={thread.id} {...thread} className="stage">
          <p id="authorDiv">
            <span id="author">{thread.author}</span>
            {thread.date}
          </p>
          <h3>{thread.title}</h3>
          <p>{thread.body}</p>
          <div id="iconDiv">
            <Upvote upvotes={thread.upvotes} />
            <Downvote downvotes={thread.downvotes} />
            <Comment comments={thread.comments} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ThreadBox;
