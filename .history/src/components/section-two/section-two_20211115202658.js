import React from 'react';
import './section-two.css';

const sectionTwo = () => {
    return (
        <section id='section_two'>
            <div className='section_two_wrapper'>
                <h2 className='ttl2'>
                    Your eCommerce <br />
                    made simple
                </h2>
                <div className='grid_row'>
                    <div className='grid_column'>
                        <div className='grid_column_wrap'>
                            <div className='images_block'>
                                <img
                                    src='img/section_two_start_one.png'
                                    alt=''
                                    className='animate_img'
                                />
                                <img
                                    src='img/section_two_start_two.png'
                                    alt=''
                                    className='payment_img'
                                />
                                <img
                                    src='img/kisspng-apple-pay-google-pay-apple-wallet-payment.png'
                                    alt=''
                                    className='apple_pay_img'
                                />
                            </div>
                            <h3>All You Need to Start</h3>
                            <p>
                                Add WooCommerce plugin to any WordPress site and
                                set up a new store in minutes.
                            </p>
                            <a href='#wrapper'>Ecommerce for Wordpress ›</a>
                        </div>
                    </div>
                    <div className='grid_column'>
                        <div className='grid_column_wrap'>
                            <div className='images_block'>
                                <img
                                    src='img/section_two_customize_one.png'
                                    alt=''
                                    className='animate_img'
                                />
                                <img
                                    src='img/square.png'
                                    alt=''
                                    className='square_img'
                                />
                                <img
                                    src='img/champ.png'
                                    alt=''
                                    className='mailchamp_img'
                                />
                                <img
                                    src='img/fb.png'
                                    alt=''
                                    className='facebook_img'
                                />
                                <img
                                    src='img/jetpack.png'
                                    alt=''
                                    className='jetpack_img'
                                />
                                <img
                                    src='img/ads.png'
                                    alt=''
                                    className='ads_img'
                                />
                            </div>

                            <h3>Customize and Extend</h3>
                            <p>
                                From subscriptions to gym classes to luxury
                                cars, WooCommerce is fully customizable.
                            </p>
                            <a href='#wrapper'>Browse Extensions ›</a>
                        </div>
                    </div>
                    <div className='grid_column'>
                        <div className='grid_column_wrap'>
                            <div className='images_block'>
                                <img
                                    src='img/section_two_active_one.png'
                                    alt=''
                                    className='animate_img'
                                />
                                <img
                                    src='img/section_two_active_two.png'
                                    alt=''
                                    className='active_two_img'
                                />
                                <img
                                    src='img/section_two_active_three.png'
                                    alt=''
                                    className='active_three_img'
                                />
                                <img
                                    src='img/section_two_active_four.png'
                                    alt=''
                                    className='active_four_img'
                                />
                            </div>
                            <h3>Active Community</h3>
                            <p>
                                WooCommerce is one of the fastest-growing
                                eCommerce communities.
                            </p>
                            <a href='#wrapper'>Check our Forums ›</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default sectionTwo;
