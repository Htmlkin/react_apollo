import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';

import SectionOne from '../section-one';
import SectionTwo from '../section-two';
import SectionThree from '../section-three';
import SectionFour from '../section-four';
import SectionFive from '../section-five';

const AllSections = () => {
    const dispatch = useDispatch();

    const { isAuth } = useAuth();

    return isAuth ? (
        <>
            <h2>Hello!</h2>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </>
    ) : (
        <>
            <Redirect to='/login' />
        </>
    );
};

export default AllSections;
