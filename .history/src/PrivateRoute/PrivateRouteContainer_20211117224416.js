import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { useAuth } from 'hooks/use-auth';

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: true,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
const { isAuth } = useAuth();

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
