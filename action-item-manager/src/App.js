import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AccountInfo from 'apps/AccountInfo/components/AccountInfo';
import Teams from 'apps/Teams/components/Teams';
import ActionItems from 'apps/ActionItems/components/ActionItems';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const StyledSwitch = styled(Switch)`
    width: 100%;
`;

function App() {
    return (
        <Router>
            <MainWrapper>
                <MainSideBar />

                <StyledSwitch>
                    <Route path="/action-items" component={ActionItems} />
                    <Route path="/account-info" component={AccountInfo} />
                    <Route path="/teams" component={Teams} />
                </StyledSwitch>
            </MainWrapper>
        </Router>
    );
}

export default App;
