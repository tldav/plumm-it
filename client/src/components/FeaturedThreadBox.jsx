import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import dateFormat from "dateformat"
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import Input from "../components/Input";
import Comments from "./Comments";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";


const FeaturedThreadBox = ({location}) => {
  const { handleThreadSelect, featuredThread: {thread, comments}} = useContext(ThreadContext)
  const { pathname } = location;

  useEffect(() => {
    const threadId = pathname.split("/")[3];
    handleThreadSelect(threadId)
    
  }, []);

  if (!thread) return null;
  return (
    <div key={thread.thread_id} className="stage">
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
      <Input />
      <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
      <Comments comments={comments} />
    </div>
  );
};

export default withRouter(FeaturedThreadBox);
