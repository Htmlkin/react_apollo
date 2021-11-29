import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import AllSections from '../all-sections';
import LoginPage from '../login-page';

// import GSAPcomponent from '../GSAPcomponent';
import { Switch, Route } from 'react-router';

// Full Application
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <GSAPcomponent /> */}
                <Switch>
                    <Route exact path='/' component={AllSections} />
                    <Route exact path='/login' component={LoginPage} />
                </Switch>

                <Footer />
            </>
        );
    }
}
