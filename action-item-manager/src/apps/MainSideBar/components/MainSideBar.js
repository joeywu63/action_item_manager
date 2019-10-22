import React from 'react';
import styled from 'styled-components';
import RouterButton from 'common/RouterButton';
import { withRouter } from 'react-router-dom';
import {setCurrentUser} from 'utils/currentUser.js'

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-right: 0.5px solid black;
`;

class MainSideBar extends React.Component {

    logout = () => {
        setCurrentUser({});
    }

    render() {
        const isLoginPage = this.props.location.pathname === '/';
        return (
            !isLoginPage && (
                <SideBarWrapper>
                    <RouterButton link="/dashboard" title="Dashboard" />
                    <RouterButton link="/account-info" title="Account Info" />
                    <RouterButton link="/teams" title="Teams" />
                    <RouterButton link="/action-items" title="Action Items" />
                    <RouterButton link="/admin-page" title="Admin Page" />
                    <RouterButton link="/" title="Logout" onClick={this.logout}/>
                </SideBarWrapper>
            )
        );
    }
}

export default withRouter(MainSideBar);
