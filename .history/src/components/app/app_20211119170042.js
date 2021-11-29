import React, { Component } from 'react';

import Footer from '../footer';
import Header from '../header';
import AllSections from '../all-sections';
import LoginPage from '../login-page';
import RegisterPage from '../register-page';
import PrivatePage from '../private-page';
import PrivateRoute from 'PrivateRoute/PrivateRouteContainer';
import mapStateToProps from 'PrivateRoute/PrivateRouteContainer';

// import GSAPcomponent from '../GSAPcomponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';

// Full Application
export default class App extends Component {
    render() {
        console.log(mapStateToProps);
        const client = new ApolloClient({
            uri: 'https://www.graphqlhub.com/graphql',
            connectToDevTools: true,
        });
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
