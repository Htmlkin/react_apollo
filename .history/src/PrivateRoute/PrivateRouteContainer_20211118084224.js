import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

import { useSelector } from 'react-redux';

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
    const { email, token, id } = useSelector((state) => state.user);
    return {
        PrivatePage: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
