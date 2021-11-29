import React from 'react';
import './login-page.css';

const LoginPage = () => {
    return (
        <main id='loginContent'>
            <section>
                <div id='enter_form'>
                    <input
                        type='text'
                        defaultValue='Login'
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <input type='text' defaultValue='Password' />
                </div>
            </section>
        </main>
    );
};

export default LoginPage;
