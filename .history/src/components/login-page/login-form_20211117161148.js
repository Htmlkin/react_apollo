import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (title, handleClick) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <form>
            <div className='enter_form'>
                <h2>Sign In</h2>
                <input
                    type='email'
                    placeholder='E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                <button
                    type='submit'
                    className='formButton'
                    onClick={handleClick}
                >
                    {/* Sign In */}
                    {title}
                </button>

                <span className='signup'>
                    New User?{' '}
                    <Link className='register' to='/register'>
                        Register
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default LoginForm;
