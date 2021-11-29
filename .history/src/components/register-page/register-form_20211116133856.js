import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
    render() {
        return (
            <div className='register_form'>
                <h2>Register</h2>
                <input
                    type='text'
                    placeholder='Login'
                    onChange={(e) => console.log(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='E-Mail'
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
                    Register
                </button>

                <span className='signup'>
                    Have account?{' '}
                    <Link className='login' to='/login'>
                        Sign In
                    </Link>
                </span>
            </div>
        );
    }
}

export default RegisterForm;
