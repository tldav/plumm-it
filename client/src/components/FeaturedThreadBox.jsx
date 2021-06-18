import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";
import CommentIcon from "../components/CommentIcon";
import Avatar from "@material-ui/core/Avatar";
import Input from "../components/Input";
import Comments from "./Comments";
import Context from "../context";
import "../stylesheets/ThreadBox.css";
import api from "../utils/API";
const dateFormat = require("dateformat");

const FeaturedThreadBox = ({ location }) => {
  const { pathname } = location;
  useEffect(() => {
    const threadId = pathname.split("/")[3];
    console.log(threadId);
    // api.findOneThread(threadId).then((data) => console.log(data));
  });

  const {
    value: {
      featuredThread: {
        thread_id,
        title,
        body,
        category_name,
        created_at,
        downvotes,
        upvotes,
        username,
        comment_count,
      },
    },
  } = useContext(Context);

  return (
    <div key={thread_id} className="stage">
      <div id="threadHeader">
        <Avatar id="avatar" src={`/static/images/${category_name}.jpg`} />
        <span id="category">p/{category_name}</span>
        <span id="user">{`• ${username} ${dateFormat(
          created_at,
          "dddd, mmmm dS, yyyy, h:MM TT"
        )}`}</span>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div style={{ marginBottom: "30px" }} id="iconDiv">
        <Upvote upvotes={upvotes} />
        <Downvote downvotes={downvotes} />
        <CommentIcon comments={comment_count} />
      </div>
      <Input />
      <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
      <Comments />
    </div>
  );
};

export default withRouter(FeaturedThreadBox);
