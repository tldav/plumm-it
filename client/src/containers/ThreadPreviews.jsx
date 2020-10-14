import { connect } from "react-redux";
import { setFeaturedThread } from "../actions";
import ThreadBox from "../components/ThreadBox";

const mapStateToProps = (state) => {
  return {
    threads: state.threads,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (thread, threadRoute) =>
    dispatch(setFeaturedThread(thread, threadRoute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadBox);
