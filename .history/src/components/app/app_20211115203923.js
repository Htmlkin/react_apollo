import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import AllSections from '../all-sections';
import LoginPage from '../login-page';
import RegisterPage from '../register-page';
import PrivatePage from '../private-page';

// import GSAPcomponent from '../GSAPcomponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Full Application
export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    {/* <GSAPcomponent /> */}

                    <Route exact path='/' component={AllSections} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/private' component={PrivatePage} />

                    <Footer />
                </Router>
            </>
        );
    }
}
