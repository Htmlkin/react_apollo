import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import AllSections from '../all-sections';
import LoginPage from '../login-page';
import RegisterPage from '../register-page';

// import GSAPcomponent from '../GSAPcomponent';
// import { Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Full Application
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <GSAPcomponent /> */}
                <Router>
                    <Route path='/' component={AllSections} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                </Router>

                <Footer />
            </>
        );
    }
}
