import React from 'react';
import './section-one.css';

const SectionFour = () => {
    return (
        <section id='section_one'>
            <div className='left_side'>
                <h1 className='ttl'>
                    Building exactly the <br />
                    eCommerce website <br />
                    you want.
                </h1>
                <p>
                    WooCommerce is a customizable, open-source eCommerce
                    platform built on WordPress.
                    <br />
                    Get started quickly and make your way.
                </p>

                <div className='start_store'>
                    <a href='#wrapper' className='start_button'>
                        Start a New Store
                    </a>
                    <div className='customize_link'>
                        or <a href='#wrapper'>Customize & Extend</a>
                    </div>
                </div>
            </div>
            <div className='right_side'>
                <div className='images_block'>
                    <img src='../img/Group 8.png' className='dot_one' alt='' />
                    <img src='../img/Group 7.png' className='dot_two' alt='' />
                    <img
                        src='../img/Group 5.png'
                        className='dot_three'
                        alt=''
                    />
                    <img
                        src='../img/PRODUCT.png'
                        className='product_img'
                        alt='Product Card Images'
                    />
                    <img
                        src='../img/Group 10.png'
                        alt='Girls Images'
                        className='girls_img'
                    />
                    <img
                        src='../img/Group 9.png'
                        alt='Payments Images '
                        className='payment_top_img'
                    />
                    <img
                        src='../img/sale.svg'
                        alt='Sale Images'
                        className='sale_img'
                    />
                    <img
                        src='../img/safe.svg'
                        alt='Safe Images'
                        className='safe_img'
                    />
                    <img
                        src='../img/cart.svg'
                        alt='Card Images'
                        className='card_img'
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
