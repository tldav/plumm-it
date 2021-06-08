import React, { useContext, useEffect } from "react";
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

  useEffect(() => {}, [realThreads]);

  console.log(realThreads);

  const redirectToThread = (thread) => {
    const path = `p/${thread.category_name}/${thread.thread_id}/${thread.title.replace(/ /g, "_")}`
    setFeaturedThread(thread);
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
            />
            <span id="category">p/{thread.category_name}</span>
            <span id="user">{`• ${thread.username} ${thread.created_at}`}</span>
          </div>
          <h3>{thread.title}</h3>
          <p>{thread.body}</p>
          <div id="iconDiv">
            <Upvote upvotes={thread.upvotes} />
            <Downvote downvotes={thread.downvotes} />
            <CommentIcon comments={thread.comment_count} />
          </div>
        </div>
      ))}

      {/* {threads.map((thread) => (
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
      ))} */}
    </>
  );
};

export default ThreadBox;
