import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

// function useAuth() {
//     const { email, token, id } = useSelector((state) => state.user);

//     return {
//         isAuth: !!email,
//         email,
//         token,
//         id,
//     };
// }

// const isAuth = useAuth();

const mapStateToProps = (state, props) => {
    return {
        PrivatePage: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
