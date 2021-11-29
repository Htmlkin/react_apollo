import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: '',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
