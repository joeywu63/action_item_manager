import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import TeamsRouter from 'apps/Teams/components/TeamsRouter';
import ActionItemsRouter from 'apps/ActionItems/components/ActionItemsRouter';
import LoginPage from 'apps/LoginPage/components/LoginPage';
import Dashboard from 'apps/Dashboard/components/Dashboard';

import PageWrapper from 'common/PageWrapper';

const MainWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

class App extends React.Component {
    render() {
        return (
            <Router>
                <MainWrapper>
                    <MainSideBar />
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
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/" exact component={LoginPage} />
                        </Switch>
                    </PageWrapper>
                </MainWrapper>
            </Router>
        );
    }
}

export default App;
