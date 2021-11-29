import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { useAuth } from 'hooks/use-auth';

function isAuthFun() {
    const { isAuth } = useAuth();
}

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
