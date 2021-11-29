import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { useAuth } from 'hooks/use-auth';

const mapStateToProps = (state, props) => {
    const a = 10;
    return {
        PrivatePage: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
