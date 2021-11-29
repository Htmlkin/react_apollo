import React from 'react';
import './section-three.css';

const SectionThree = () => {
    return (
        <section id='section_three'>
            <div className='section_three_wrapper'>
                <img
                    src='../img/section_three_dot.svg'
                    className='dot_one_img'
                    alt=''
                />
                <img
                    src='../img/section_three_dot.svg'
                    className='dot_one_img_rotate'
                    alt=''
                />

                <img src='../img/ellipse.svg' className='ellipse_one' alt='' />
                <img
                    src='../img/ellipse_two.svg'
                    className='ellipse_two'
                    alt=''
                />
                <img
                    src='../img/ellipse.svg'
                    className='ellipse_three'
                    alt=''
                />
                <img
                    src='../img/ellipse_three.svg'
                    className='ellipse_four'
                    alt=''
                />

                <div className='block_documentation_top'>
                    <div className='left_side'>
                        <img src='../img/section_three_one.png' alt='' />
                    </div>
                    <div className='right_side'>
                        <h2 className='first_ttl_margin'>
                            Develop <br />
                            Without Limits
                        </h2>
                        <p className='anim_p'>
                            WooCommerce is developer friendly, too. Built with a
                            REST API, WooCommerce is scalable and can integrate
                            with virtually any service. Design a complex store
                            from scratch, extend a store for a client, or simply
                            add a single product to a WordPress site—your store,
                            your way.
                        </p>
                        <a href='#wrapper' className='green_button'>
                            Read the Documentation
                        </a>
                    </div>
                </div>
                <div className='block_documentation_bottom'>
                    <div className='left_side'>
                        <h2>
                            Know our <br />
                            Global Community
                        </h2>
                        <p className='anim_p'>
                            WooCommerce is one of the fastest-growing eCommerce
                            communities. We’re proud that the helpfulness of the
                            community and a wealth of online resources are
                            frequently cited as reasons our users love it. There
                            are 80+ meetups worldwide!
                        </p>
                        <a href='#wrapper' className='green_button'>
                            Read the Documentation
                        </a>
                    </div>
                    <div className='right_side'>
                        <img src='../img/section_three_two.png' alt='' />
                    </div>
                </div>
                <div className='block_documentation_bottom'></div>
            </div>
        </section>
    );
};

export default SectionThree;
