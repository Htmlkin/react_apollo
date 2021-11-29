import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from 'stotre/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassord(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    const auth = getAuth();

    return (
        <div>
            <form title='Sign In' handleClick={handleLogin} />
        </div>
    );
};

export { Login };
