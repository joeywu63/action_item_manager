import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import TeamsRouter from 'apps/Teams/components/TeamsRouter';
import ActionItemsRouter from 'apps/ActionItems/components/ActionItemsRouter';
import LoginPage from 'apps/LoginPage/components/LoginPage';
import Dashboard from 'apps/Dashboard/components/Dashboard';
import AdminPage from 'apps/AdminPage/components/Admin';

import PageWrapper from 'common/PageWrapper';

import { getCurrentUser } from 'utils/currentUser';

const MainWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

class App extends React.Component {
    state = {
        isSignedIn: false,
        isSigningUp: false
    };

    login = () => {
        this.setState({ isSignedIn: true, isSignedUp: false });
    };

    logout = () => {
        this.setState({ isSignedIn: false, isSignedUp: false });
    };

    render() {
        const { isSignedIn, isSigningUp } = this.state;
        const currentUser = getCurrentUser(); // we need to get current user also for security reasons

        return isSignedIn && currentUser ? (
            <MainRouter logout={this.logout} />
        ) : isSigningUp ? (
            <div>Sign up</div>
        ) : (
            <LoginPage login={this.login} />
        );
    }
}

class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <MainWrapper>
                    <MainSideBar logout={this.props.logout} />
                    <PageWrapper>
                        <Switch>
                            <Route
                                path="/action-items"
                                component={ActionItemsRouter}
                            />
                            <Route
                                path="/account-info"
                                component={AccountInfo}
                            />
                            <Route path="/teams" component={TeamsRouter} />
<<<<<<< HEAD
                            <Route path="/admin-page" component={AdminPage} />
                            <Route path="/" component={Dashboard} />
=======
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/" exact component={LoginPage} />
                            <Route path="/admin-page" component={AdminPage} />
>>>>>>> admin deleting teams
                        </Switch>
                    </PageWrapper>
                </MainWrapper>
            </Router>
        );
    }
}

export default App;
