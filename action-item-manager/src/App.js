import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import TeamsRouter from 'apps/Teams/components/TeamsRouter';
import ActionItemsRouter from 'apps/ActionItems/components/ActionItemsRouter';
import LoginPage from 'apps/LoginPage/components/LoginPage';
import AdminPage from 'apps/AdminPage/components/Admin';

import PageWrapper from 'common/PageWrapper';

import { getCurrentUser } from 'utils/currentUser';
import { COLOURS } from 'utils/constants';

const MainWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    max-height: 100%;
    background-color: ${COLOURS.background};
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
    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <MainWrapper>
                    <MainSideBar logout={this.props.logout} />
                    <PageWrapper>
                        <Switch>
                            <Route
                                path="/account-info"
                                component={AccountInfo}
                            />
                            <Route path="/teams" component={TeamsRouter} />
                            <Route path="/admin-page" component={AdminPage} />
                            <Route
                                path="/action-items"
                                component={ActionItemsRouter}
                            />
                            <Route exact path="/" render={() => (
                                <Redirect to="/action-items"/>
                            )}/>
                        </Switch>
                    </PageWrapper>
                </MainWrapper>
            </Router>
        );
    }
}

export default App;
