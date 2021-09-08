import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import FeaturedThreadBox from "./FeaturedThreadBox";
import CommentList from "./CommentList"
import Input from "./Input";
import Banner from "./Banner"
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";

const FeaturedThreadContent = () => {
  const { featuredThread: {thread, comments}} = useContext(ThreadContext)
  const { user, isLoggedIn } = useContext(UserContext)

  const renderInputIfLoggedIn = !user.username && !isLoggedIn ? 
  <Banner /> : <Input placeholderText="Leave a Comment" thread={thread} />

  if (!thread) return null;
  return (
    <div className="stage">
      <FeaturedThreadBox thread={thread} />
      {renderInputIfLoggedIn}
      <hr style={{margin: "40px 0"}} />
      <CommentList comments={comments} thread={thread} originalPoster={thread.username} />
    </div>
  );
};

export default withRouter(FeaturedThreadContent);