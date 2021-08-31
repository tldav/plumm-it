import React from "react";
import Avatar from "@material-ui/core/Avatar";
import dateFormat from "dateformat"
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import "../stylesheets/ThreadBox.css";

const FeaturedThreadBox = ({thread}) => {

  return (
    <div key={thread.thread_id} >
      <div className="thread-header">
        <Avatar id="avatar" src={`/static/images/${thread.category_name}.jpg`} />
        <span className="category">p/{thread.category_name}</span>
        <span>{`• ${thread.username} ${dateFormat(
          thread.created_at,
          "dddd, mmmm dS, yyyy, h:MM TT"
        )}`}</span>
      </div>
      <h3 className="thread-title">{thread.title}</h3>
      <p>{thread.body}</p>
      <div style={{ marginBottom: "30px" }} id="iconDiv">
        <Upvote upvotes={thread.upvotes} />
        <Downvote downvotes={thread.downvotes} />
        <CommentIcon comments={thread.comment_count} />
      </div>
    </div>
  );
};

export default FeaturedThreadBox
