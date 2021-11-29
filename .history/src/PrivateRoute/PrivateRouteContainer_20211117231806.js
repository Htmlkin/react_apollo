import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
