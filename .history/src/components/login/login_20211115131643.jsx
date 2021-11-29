import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from 'stotre/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    return <div></div>;
};

export { Login };
