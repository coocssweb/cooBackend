import { connect } from 'react-redux';
import Login from '../pages/login';
import * as usersActions from '../redux/actions/users';

function mapStateToProps (state) {
    let usersState = state.get('users');
    return {
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
