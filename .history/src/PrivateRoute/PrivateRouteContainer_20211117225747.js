import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';

export function useAuth() {
    const { email, token, id } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
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
