import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

let tmp = false;

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: tmp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
