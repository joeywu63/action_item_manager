import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import TeamsRouter from 'apps/Teams/components/TeamsRouter';
import ActionItemsRouter from 'apps/ActionItems/components/ActionItemsRouter';
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
    };

    logout = () => {
        this.setState({ isSignedIn: false, isSignedUp: false });
    };

    render() {
        return <MainRouter logout={this.logout} />
    }
}

class MainRouter extends React.Component {
    componentDidMount() {}

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
                        </Switch>
                    </PageWrapper>
                </MainWrapper>
            </Router>
        );
    }
}

export default App;