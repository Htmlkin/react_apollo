import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const loginLink = '/login';

    return (
        <header className='header_stick anim'>
            <div className='header_content'>
                <div className='header_left'>
                    <div className='header_logo'>
                        <Link to='/'>
                            <img src='../img/LOGO.png' alt='LOGO' />
                        </Link>
                    </div>

                    <div className='block_menu'>
                        <menu className='top_menu'>
                            <ul>
                                <li>
                                    <Link to='/'>Home Page</Link>
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
                    <Link className='login_button' to={loginLink}>
                        <i className='fa-solid fa-user'></i>Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
