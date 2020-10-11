import { connect } from "react-redux";
import ThreadBox from "../components/ThreadBox";

const mapStateToProps = (state) => {
  return {
    threads: state.threads,
  };
};

export default connect(mapStateToProps)(ThreadBox);
