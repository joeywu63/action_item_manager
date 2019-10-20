import React from 'react';
import styled from 'styled-components';
import RouterButton from 'common/RouterButton';
import { withRouter } from 'react-router-dom';

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-right: 0.5px solid black;
`;

class MainSideBar extends React.Component {
    render() {
        console.log(this.props.location);
        const isLoginPage = this.props.location.pathname === '/';
        return !isLoginPage && (
            <SideBarWrapper>
                <RouterButton link="/dashboard" title="Dashboard" />
                <RouterButton link="/account-info" title="Account Info" />
                <RouterButton link="/teams" title="Teams" />
                <RouterButton link="/action-items" title="Action Items" />
                <RouterButton link="/admin-page" title="Admin Page" />
            </SideBarWrapper>
        );
    }
}

export default withRouter(MainSideBar);
