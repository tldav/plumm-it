import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import dateFormat from "dateformat"
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import formatNum, { formatVotes } from "../utils/formatNum"
import "../stylesheets/ThreadBox.css";

const FeaturedThreadBox = ({thread}) => {

  return (
    <div>
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
      <p>{thread.body}</p>
      <div className="icons icons-horizontal" style={{marginBottom: "15px", marginTop: "15px"}}>
          <Upvote />
          <span className="iconCount">{formatVotes(thread.upvotes, thread.downvotes)}</span>
          <Downvote />
          <ChatBubbleIcon fontSize="small" />
          <span className="iconCount">{formatNum(thread.comment_count)} comments</span>
        </div>
    </div>
  );
};

export default FeaturedThreadBox


// 20 x 20
// 16.67 x16.67