import React from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import Comment from "../components/Comment";
import Avatar from "@material-ui/core/Avatar";
import Input from "../components/Input";

const FeaturedThreadBox = ({
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
      <div id="iconDiv">
        <Upvote upvotes={upvotes} />
        <Downvote downvotes={downvotes} />
        <Comment comments={comments} />
      </div>
      <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
      <Input />
    </div>
  );
};

export default FeaturedThreadBox;
