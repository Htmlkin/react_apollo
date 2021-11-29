import React from 'react';
import './section-five.css';

const SectionFive = () => {
    return (
        <section id='section_five'>
            <div className='section_five-wrapper'>
                <div className='ppl_block'>
                    <h2>Supported by real people</h2>
                    <p className='anim_p'>
                        Our team of Happiness Engineers works remotely from 58
                        countries providing customer support across multiple
                        time zones.
                    </p>
                </div>
                <div className='platform_block_grid'>
                    <div className='column_center'>
                        WooCommerce - the
                        <strong>most customizable eCommerce platform</strong>
                        for building
                        <strong>your online business</strong>.
                    </div>
                    <div className='column_right'>
                        <a className='get_started' href='#wrapper'>
                            Get Started
                        </a>
                    </div>
                </div>

                <div className='support_block_grid_wrap'>
                    <div className='support_block_inside'>
                        <i className='fa-regular fa-circle-check'></i>30 day
                        money back guarantee
                    </div>
                    <div className='support_block_inside'>
                        <i className='fa-regular fa-life-ring'></i>Support teams
                        across the world
                    </div>
                    <div className='support_block_inside'>
                        <i className='fa-solid fa-lock'></i>Safe & Secure online
                        payment
                    </div>
                    <div className='support_block_logo'>
                        <img src='../img/white_logo.png' alt='logo' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFive;
