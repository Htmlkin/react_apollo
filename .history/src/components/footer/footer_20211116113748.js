import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='icons_block'>
                <a href='#wrapper' className='social_icons'>
                    <img src='../img/twitter.svg' alt=''></img>
                </a>
                <a href='#wrapper' className='social_icons'>
                    <img src='../img/fb.svg' alt=''></img>
                </a>
                <a href='#wrapper' className='social_icons'>
                    <img src='../img/rss.svg' alt=''></img>
                </a>
                <a href='#wrapper' className='social_icons'>
                    <img src='../img/insta.svg' alt=''></img>
                </a>
            </div>
            <div className='copyright_block'>
                COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
            </div>
            <div className='logo_block'>
                <img src='../img/automattic.png' alt='logo' />
            </div>
        </footer>
    );
};

export default Footer;
