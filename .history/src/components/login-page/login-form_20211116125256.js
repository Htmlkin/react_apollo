import React from 'react';

const LoginForm = () => {
    return (
        <div className='enter_form'>
            <h2>Sign In</h2>
            <input
                type='text'
                placeholder='Login'
                onChange={(e) => console.log(e.target.value)}
            />
            <input
                type='text'
                placeholder='Password'
                onChange={(e) => console.log(e.target.value)}
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
                New User? <Link to='/register'>Register</Link>
            </span>
        </div>
    );
};
