import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RouterButton from 'common/RouterButton';

import { setCurrentUser } from 'utils/currentUser.js';

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vh;
    border-right: 0.5px solid black;
    background: #2b2b2b;
`;

class MainSideBar extends React.Component {
    state = {activeButton: "Dashboard"}

    logout = () => {
        const { logout } = this.props;
        
        setCurrentUser(null);
        logout();
        this.setState({activeButton: "Dashboard"})
    };

    handleClick = (e) => {
        this.setState({activeButton: e.target.innerText});
    } 

    render() {
        return (
            <SideBarWrapper>
                <RouterButton link="/dashboard" title="Dashboard" onClick={this.handleClick} isActive={"Dashboard" === this.state.activeButton} />
                <RouterButton link="/account-info" title="Account Info" onClick={this.handleClick}  isActive={"Account Info" === this.state.activeButton} />
                <RouterButton link="/teams" title="Teams" onClick={this.handleClick} isActive={"Teams" === this.state.activeButton}/>
                <RouterButton link="/action-items" title="Action Items" onClick={this.handleClick} isActive={"Action Items" === this.state.activeButton} />
                <RouterButton link="/admin-page" title="Admin Page" onClick={this.handleClick} isActive={"Admin Page" === this.state.activeButton} />
                <RouterButton link="/" title="Logout" onClick={this.logout} isActive={false} />
            </SideBarWrapper>
        );
    }
}

MainSideBar.propTypes = {
    logout: PropTypes.func.isRequired
};

export default withRouter(MainSideBar);
