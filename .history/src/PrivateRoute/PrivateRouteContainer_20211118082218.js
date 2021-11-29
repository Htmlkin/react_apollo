import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

let tmp = true;

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: tmp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
