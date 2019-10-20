import React from 'react';
import styled from 'styled-components';
import RouterButton from 'common/RouterButton';

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-right: 0.5px solid black;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
`;

class MainSideBar extends React.Component {
    render() {
        return (
            <SideBarWrapper>
                <RouterButton link="/dashboard" title="Dashboard" />
                <RouterButton link="/account-info" title="Account Info" />
                <RouterButton link="/teams" title="Teams" />
                <RouterButton link="/action-items" title="Action Items" />
                <RouterButton link="/admin-page" title="Admin Page" /> 
            </SideBarWrapper>
            // TODO: Add actual link to admin-page
        );
    }
}

export default MainSideBar;
