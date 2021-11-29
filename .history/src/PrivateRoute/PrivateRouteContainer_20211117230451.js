import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';

const useAuth = () => {
    const { email, token, id } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
};

const isAuth = useAuth();

console.log(isAuth);

const mapStateToProps = (state, props) => {
    return { isAuth } ? { PrivatePage: false } : { PrivatePage: true };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
