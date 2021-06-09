import React, { useContext, useEffect } from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/ThreadBox.css";
import Context from "../context";
var dateFormat = require("dateformat");

const ThreadBox = () => {
  let history = useHistory();
  const {
    value: {
      realThreads,
      actions: { setFeaturedThread },
    },
  } = useContext(Context);

  useEffect(() => {}, [realThreads]);

  console.log(realThreads);

  const redirectToThread = (thread) => {
    const path = `p/${thread.category_name}/${thread.thread_id}/${thread.title.replace(/ /g, "_")}`;
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
              alt={`${thread.category_name} image`}
            />
            <span id="category">p/{thread.category_name}</span>
            <span id="user">{`• ${thread.username} ${dateFormat(
              thread.created_at,
              "dddd, mmmm dS, yyyy, h:MM:ss TT"
            )}`}</span>
            {console.log(dateFormat(thread.created_at))}
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
    </>
  );
};

export default ThreadBox;
