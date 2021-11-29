import React, { Component } from 'react';
import { useAuth } from 'hooks/use-auth';

import Footer from '../footer';
import Header from '../header';
import AllSections from '../all-sections';
import LoginPage from '../login-page';
import RegisterPage from '../register-page';
import PrivatePage from '../private-page';
import PrivateRoute from 'PrivateRoute/PrivateRouteContainer';

// import GSAPcomponent from '../GSAPcomponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Full Application
export default class App extends Component {
    const { isAuth } = useAuth();
    render() {
        return (
            <>
                <Router>
                    <Header />
                    {/* <GSAPcomponent /> */}

                    <Route exact path='/' component={AllSections} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <PrivateRoute path='/private' component={PrivatePage} />

                    <Footer />
                </Router>
            </>
        );
    }
}
