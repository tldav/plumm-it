import React from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import Avatar from "@material-ui/core/Avatar";
import Input from "../components/Input";
import ThreadComments from "../containers/ThreadComments";

const FeaturedThreadBox = ({
  id,
  author,
  date,
  title,
  body,
  upvotes,
  downvotes,
  category,
  comments,
}) => {
  return (
    <div className="stage">
      <div id="threadHeader">
        <Avatar id="avatar" src={`/static/images/${category}.jpg`} />
        <span id="category">p/{category}</span>
        <span id="user">{`• ${author} ${date}`}</span>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div style={{ marginBottom: "30px" }} id="iconDiv">
        <Upvote upvotes={upvotes} />
        <Downvote downvotes={downvotes} />
        <CommentIcon comments={comments} />
      </div>
      <Input />
      <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
      <ThreadComments threadId={id} />
    </div>
  );
};

export default FeaturedThreadBox;
