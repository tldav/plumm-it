import { connect } from "react-redux";
import Comments from "../components/Comments";

const MapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(MapStateToProps)(Comments);
