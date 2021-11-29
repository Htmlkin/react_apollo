import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from '../stotre/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassord(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    return <Form title='Sign In' handleClick={handleLogin} />;
};

export { Login };
