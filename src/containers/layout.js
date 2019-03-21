import { connect } from 'react-redux';
import Layout from '../pages/layout';

function mapStateToProps (state) {
    let tagsState = state.get('tags');
    return {
        loading: tagsState.get('loading'),
        list: tagsState.get('list'),
    };
}

function mapDispatchToProps (dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
