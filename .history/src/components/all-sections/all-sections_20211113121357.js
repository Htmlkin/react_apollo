import React from 'react';
// import { Redirect } from 'react-router';

import SectionOne from '../section-one';
import SectionTwo from '../section-two';
import SectionThree from '../section-three';
import SectionFour from '../section-four';
import SectionFive from '../section-five';

const AllSections = () => {
    return (
        <>
            {/* <Redirect to='/login' /> */}
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </>
    );
};

export default AllSections;
