import { connect } from "react-redux";
import FeaturedThreadBox from "../components/FeaturedThreadBox";

const mapStateToProps = (state) => {
  const {
    id,
    author,
    date,
    title,
    body,
    upvotes,
    downvotes,
    category,
    comments,
  } = state.featuredThread.thread;

  return {
    id,
    author,
    date,
    title,
    body,
    upvotes,
    downvotes,
    category,
    comments,
  };
};

export default connect(mapStateToProps)(FeaturedThreadBox);
