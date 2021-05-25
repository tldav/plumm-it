import React, { useContext } from "react";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import Avatar from "@material-ui/core/Avatar";
import Input from "../components/Input";
import Comments from "./Comments";
import Context from "../context";
import "../stylesheets/ThreadBox.css";

const FeaturedThreadBox = () => {
  const {
    value: {
      featuredThread: {
        id,
        author,
        date,
        title,
        body,
        upvotes,
        downvotes,
        category,
        comments,
      },
    },
  } = useContext(Context);

  return (
    <div key={id} className="stage">
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
      <Comments />
    </div>
  );
};

export default FeaturedThreadBox;
