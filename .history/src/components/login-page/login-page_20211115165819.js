import React from 'react';
import './login-page.css';

const LoginPage = () => {
    return (
        <main id='loginContent'>
            <section>
                <div id='enter_form'>
                    <input
                        type='text'
                        value='Login'
                        onClick={(e) => (e.target.value = '')
                        onC
                    }
                    />
                    <input type='text' value='Password' />
                </div>
            </section>
        </main>
    );
};

export default LoginPage;
