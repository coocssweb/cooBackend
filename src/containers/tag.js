import { connect } from 'react-redux';
import Tag from '../pages/tag';
import * as tagsActions from '../redux/actions/tags';

function mapStateToProps (state) {
    let tagsState = state.get('tags');
    return {
        loading: tagsState.get('loading'),
        list: tagsState.get('list'),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetch: () => {
            return dispatch(tagsActions.fetch());
        },
        create: (data, callback) => {
            return dispatch(tagsActions.create(data, callback));
        },
        edit: (id, data, callback) => {
            return dispatch(tagsActions.edit(id, data, callback));
        },
        remove: (id, callback) => {
            return dispatch(tagsActions.remove(id, callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
