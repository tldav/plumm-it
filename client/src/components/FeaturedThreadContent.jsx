import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import FeaturedThreadBox from "./FeaturedThreadBox";
import Comments from "./Comments"
import Input from "./Input";
import LoggedOutBanner from "./LoggedOutBanner"
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";

const FeaturedThreadContent = () => {
  const { featuredThread: {thread, comments}} = useContext(ThreadContext)
  const { user, isLoggedIn } = useContext(UserContext)

  const renderInputIfLoggedIn = !user.username && !isLoggedIn ? 
  <LoggedOutBanner /> : <Input thread={thread} user={user} />
  
  if (!thread) return null;
  return (
    <div className="stage">
      <FeaturedThreadBox thread={thread} />
      {renderInputIfLoggedIn}
      <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
      <Comments comments={comments} />
    </div>
  );
};

export default withRouter(FeaturedThreadContent);
