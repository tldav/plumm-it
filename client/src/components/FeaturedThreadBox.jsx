import React from "react";
import Avatar from "@material-ui/core/Avatar";
import dateFormat from "dateformat"
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import "../stylesheets/ThreadBox.css";
import useRenderCount from "../hooks/useRenderCount";


const FeaturedThreadBox = ({thread}) => {

    useRenderCount("FeaturedThreadBox")
    
  return (
    <div key={thread.thread_id} >
      <div id="threadHeader">
        <Avatar id="avatar" src={`/static/images/${thread.category_name}.jpg`} />
        <span id="category">p/{thread.category_name}</span>
        <span id="user">{`• ${thread.username} ${dateFormat(
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
