import React from 'react';
import './header.css';

const Header = () => {
    const loginLink = '/login';

    return (
        <header className='header_stick anim'>
            <div className='header_content'>
                <div className='header_left'>
                    <div className='header_logo'>
                        <a href='/'>
                            <img src='../img/LOGO.png' alt='LOGO' />
                        </a>
                    </div>

                    <div className='block_menu'>
                        <menu className='top_menu'>
                            <ul>
                                <li>
                                    <a href='#wrapper'>Sell</a>
                                </li>
                                <li>
                                    <a href='#wrapper'>Marketplase</a>
                                </li>
                                <li>
                                    <a href='#wrapper'>Community</a>
                                </li>
                                <li>
                                    <a href='#wrapper'>Develop</a>
                                </li>
                                <li>
                                    <a href='#wrapper'>Resources</a>
                                </li>
                            </ul>
                        </menu>
                    </div>
                </div>

                <div className='header_right'>
                    <a className='login_button' href={loginLink}>
                        <i className='fa-solid fa-user'></i>Login
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
