import React from 'react';
import './section-four.css';

const SectionFour = () => {
    // 1 Testimonials slider

    let testims = document.getElementsByClassName('p_testim');
    let counter = 0;

    // 1.1 NEXT Button

    const nextTestim = () => {
        for (counter; counter < testims.length; counter++) {
            if (testims[counter].classList.contains('_show')) {
                if (counter + 1 !== testims.length) {
                    testims[counter].classList.remove('_show');
                    counter += 1;
                    testims[counter].classList.add('_show');
                } else {
                    testims[counter].classList.remove('_show');
                    testims[0].classList.add('_show');
                    counter = 0;
                }
                break;
            }
        }
    };

    // 1.2 PREV Button

    const prevTestim = () => {
        for (counter; counter >= 0; counter--) {
            if (counter > 0 && counter < testims.length) {
                testims[counter].classList.remove('_show');
                counter -= 1;
                testims[counter].classList.add('_show');
            } else if (counter === 0) {
                counter = testims.length - 1;
                testims[counter].classList.add('_show');
                testims[0].classList.remove('_show');
            }
            break;
        }
    };

    //-------------------

    return (
        <section id='section_four'>
            <div className='section_four_wrapper'>
                <h2>Trusted by Agencies & Store Owners</h2>
                <div className='testim_text_field_wrap'>
                    <p className='p_testim _show'>
                        No other eCommerce platform allows people to start for
                        free and grow their store as their business grows. More
                        importantly, WooCommerce doesn't charge you a portion of
                        your profits as your business grows!
                    </p>
                    <p className='p_testim'>
                        Our team of Happiness Engineers works remotely from 58
                        countries providing customer support across multiple
                        time zones.
                    </p>
                    <p className='p_testim'>
                        More importantly, WooCommerce doesn't charge you a
                        portion of your profits as your business grows!
                    </p>
                    <p className='p_testim'>
                        WooCommerce - the most customizable eCommerce platform
                        for building your online business.
                    </p>
                    <p className='p_testim'>
                        COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY
                        POLICY
                    </p>
                    <div className='testim_prev' onClick={prevTestim}>
                        <i className='fas fa-arrow-left'></i>
                    </div>
                    <div className='testim_next' onClick={nextTestim}>
                        <i className='fas fa-arrow-right'></i>
                    </div>
                </div>

                <img
                    src='../img/testim_dot_one.png'
                    className='dot_one_img'
                    alt=''
                />
                <img
                    src='../img/testim_dot_two.png'
                    className='dot_two_img'
                    alt=''
                />

                <img
                    src='../img/testim_photo_one.png'
                    className='testim_photo_one'
                    alt=''
                />
                <img
                    src='../img/testim_photo_two.png'
                    className='testim_photo_two'
                    alt=''
                />
                <img
                    src='../img/testim_photo_three.png'
                    className='testim_photo_three'
                    alt=''
                />
                <img
                    src='../img/testim_photo_four.png'
                    className='testim_photo_four'
                    alt=''
                />
                <img
                    src='../img/testim_photo_five.png'
                    className='testim_photo_five'
                    alt=''
                />
                <img
                    src='../img/testim_photo_six.png'
                    className='testim_photo_six'
                    alt=''
                />
            </div>
        </section>
    );
};

export default SectionFour;
