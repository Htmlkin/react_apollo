import { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div>
            <input type='email' value={email} />
            <input type='password' value={pass} />
        </div>
    );
};

export { Form };
