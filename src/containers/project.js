import { connect } from 'react-redux';
import Project from '../pages/project';
import * as projectsActions from '../redux/actions/projects';

function mapStateToProps (state) {
    let projectsState = state.get('projects');
    return {
        loading: projectsState.get('loading'),
        list: projectsState.get('list'),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetch: () => {
            return dispatch(projectsActions.fetch());
        },
        create: (data, callback) => {
            return dispatch(projectsActions.create(data, callback));
        },
        edit: (id, data, callback) => {
            return dispatch(projectsActions.edit(id, data, callback));
        },
        remove: (id, callback) => {
            return dispatch(projectsActions.remove(id, callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
