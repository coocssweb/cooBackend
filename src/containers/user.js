import { connect } from 'react-redux';
import User from '../pages/layout/user';
import * as usersActions from '../redux/actions/users';

function mapStateToProps (state) {
    let usersState = state.get('users');
    return {
        loading: usersState.get('loading'),
        info: usersState.get('info')
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchInfo: () => {
            return dispatch(usersActions.info());
        },
        login: (name, password, callback) => {
            return dispatch(usersActions.login(name, password, callback));
        },
        logout: (callback) => {
            return dispatch(usersActions.logout(callback));
        },
        edit: (data, callback) => {
            return dispatch(usersActions.edit(data, callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
