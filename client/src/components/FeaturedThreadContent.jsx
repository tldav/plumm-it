import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import FeaturedThreadBox from "./FeaturedThreadBox";
import Comments from "./Comments"
import Input from "./Input";
import UserDialog from "./UserDialog"
import { UserContext } from "../context/UserContext";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/ThreadBox.css";

const FeaturedThreadContent = () => {
  const { featuredThread: {thread, comments}} = useContext(ThreadContext)
  const { user, isLoggedIn } = useContext(UserContext)

  const renderInputIfLoggedIn = !user.username && !isLoggedIn ? 
  <div>
  <UserDialog purpose="signup" buttonTheme="no-style-button" /> 
  to leave a comment. Already signed up? 
  <UserDialog purpose="login" buttonTheme="no-style-button"/> 
  here.
</div> : <Input thread={thread} user={user} />


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
