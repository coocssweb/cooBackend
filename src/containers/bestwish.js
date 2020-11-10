import { connect } from "react-redux";
import Bestwish from "../pages/bestwish";
import * as bestwishsActions from "../redux/actions/bestwishs";
import * as mediasActions from "../redux/actions/medias";

function mapStateToProps(state) {
  let bestwishsState = state.get("bestwishs");
  let mediasState = state.get("medias");

  const medias = mediasState.get("list");
  const mediaMap = medias.reduce((result, media) => {
    result[media.id] = media;
    return result;
  }, {});

  return {
    loading: bestwishsState.get("loading"),
    list: bestwishsState.get("list"),
    medias: medias,
    mediaMap,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      return dispatch(bestwishsActions.fetch());
    },
    fetchMedias: () => {
      return dispatch(mediasActions.fetch());
    },
    create: (data, callback) => {
      return dispatch(bestwishsActions.create(data, callback));
    },
    edit: (id, data, callback) => {
      return dispatch(bestwishsActions.edit(id, data, callback));
    },
    remove: (id, callback) => {
      return dispatch(bestwishsActions.remove(id, callback));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bestwish);
