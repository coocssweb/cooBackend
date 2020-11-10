import { connect } from "react-redux";
import Media from "../pages/media";
import * as mediasActions from "../redux/actions/medias";

function mapStateToProps(state) {
  let mediasState = state.get("medias");
  return {
    loading: mediasState.get("loading"),
    list: mediasState.get("list"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      return dispatch(mediasActions.fetch());
    },
    create: (data, callback) => {
      return dispatch(mediasActions.create(data, callback));
    },
    edit: (id, data, callback) => {
      return dispatch(mediasActions.edit(id, data, callback));
    },
    remove: (id, callback) => {
      return dispatch(mediasActions.remove(id, callback));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
