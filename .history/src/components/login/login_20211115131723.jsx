import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from 'stotre/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const auth = getAuth();

    return <div></div>;
};

export { Login };
