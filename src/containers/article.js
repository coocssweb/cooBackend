import { connect } from 'react-redux';
import Article from '../pages/article';
import * as articleActions from '../redux/actions/articles';

function mapStateToProps (state) {
    let articlesState = state.get('articles');
    return {
        loading: articlesState.get('loading'),
        list: articlesState.get('list'),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetch: (classify) => {
            return dispatch(articleActions.fetch(classify));
        },
        create: (data, callback) => {
            return dispatch(articleActions.create(data, callback));
        },
        edit: (id, data, callback) => {
            return dispatch(articleActions.edit(id, data, callback));
        },
        remove: (id, callback) => {
            return dispatch(articleActions.remove(id, callback));
        },
        clear: () => {
            return dispatch(articleActions.clear());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
