import React from 'react';
import './register-page.css';

const RegisterPage = () => {
    return (
        <main id='registerContent'>
            <section>
                <div id='enter_form'>
                    <h2>Sign In</h2>
                    <input
                        type='text'
                        defaultValue='Login'
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <input
                        type='text'
                        defaultValue='Password'
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <span className='signup'>
                        or <a href='/register'>sign up</a>
                    </span>
                </div>
            </section>
        </main>
    );
};

export default RegisterPage;
