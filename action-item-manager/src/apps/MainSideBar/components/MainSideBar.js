import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RouterButton from 'common/RouterButton';

import { setCurrentUser } from 'utils/currentUser.js';

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-right: 0.5px solid black;
`;

class MainSideBar extends React.Component {
    logout = () => {
        const { logout } = this.props;

        setCurrentUser(null);
        logout();
    };

    render() {
        return (
            <SideBarWrapper>
                <RouterButton link="/dashboard" title="Dashboard" />
                <RouterButton link="/account-info" title="Account Info" />
                <RouterButton link="/teams" title="Teams" />
                <RouterButton link="/action-items" title="Action Items" />
                <RouterButton link="/admin-page" title="Admin Page" />
                <RouterButton link="/" title="Logout" onClick={this.logout} />
            </SideBarWrapper>
        );
    }
}

MainSideBar.propTypes = {
    logout: PropTypes.func.isRequired
};

export default withRouter(MainSideBar);
