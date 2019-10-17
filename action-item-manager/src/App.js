import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import TeamsRouter from 'apps/Teams/components/TeamsRouter';
import ActionItemsRouter from 'apps/ActionItems/components/ActionItemsRouter';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

function App() {
    return (
        <Router>
            <MainWrapper>
                <MainSideBar />

                <Switch>
                    <Route path="/action-items" component={ActionItemsRouter} />
                    <Route path="/account-info" component={AccountInfo} />
                    <Route path="/teams" component={TeamsRouter} />
                </Switch>
            </MainWrapper>
        </Router>
    );
}

export default App;
