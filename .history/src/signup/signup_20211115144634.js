import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from 'stotre/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassord(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    return (
        <div>
            <form title='register' handleClick={handleRegister} />
        </div>
    );
};

export { SignUp };
