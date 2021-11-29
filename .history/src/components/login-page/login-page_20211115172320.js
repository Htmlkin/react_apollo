import React from 'react';
import './login-page.css';

const LoginPage = () => {
    return (
        <main id='loginContent'>
            <section>
                <div id='enter_form'>
                    <input
                        type='text'
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <input type='text' />
                </div>
            </section>
        </main>
    );
};

export default LoginPage;
