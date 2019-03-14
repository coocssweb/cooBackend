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
        create: (data) => {
            return dispatch(tagsActions.create(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
