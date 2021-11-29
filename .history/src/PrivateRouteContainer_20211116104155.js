import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state, props) => {
    return {
        showSecret: true, // open or hide private page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
