import { connect } from 'react-redux';
import Demo from '../pages/demo';
import * as demosActions from '../redux/actions/demos';

function mapStateToProps (state) {
    let demosState = state.get('demos');
    return {
        loading: demosState.get('loading'),
        list: demosState.get('list'),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetch: () => {
            return dispatch(demosActions.fetch());
        },
        create: (data, callback) => {
            return dispatch(demosActions.create(data, callback));
        },
        edit: (id, data, callback) => {
            return dispatch(demosActions.edit(id, data, callback));
        },
        remove: (id, callback) => {
            return dispatch(demosActions.remove(id, callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
