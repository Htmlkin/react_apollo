import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        const [username, setUsername] = useState('');
        const [pass, setPass] = useState('');

        return (
            <form action=''>
                <div className='enter_form'>
                    <h2>Sign In</h2>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Sign In
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
    }
}

export default LoginForm;
