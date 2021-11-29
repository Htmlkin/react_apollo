import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassord } from 'firebase/auth';
import { Form } from '../form/form';
import { setUser } from 'stotre/slices/userSlice';

const SignUp = () => {
    return (
        <div>
            <form title='register' handleClick={handleRegister} />
        </div>
    );
};

export { SignUp };
