import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form action=''>
                <div className='enter_form'>
                    <h2>Sign In</h2>
                    <input
                        type='text'
                        placeholder='Username'
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
