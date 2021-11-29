import React from 'react';
import { Link } from 'react-router-dom';
import './login-page.css';

const LoginPage = () => {
    return (
        <main id='loginContent'>
            <section>
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
                    <span className='signup'>
                        or <Link to='/register'>sign up</Link>
                    </span>
                </div>
                {/* <div className='outerBox'></div> */}
            </section>
        </main>
    );
};

export default LoginPage;
