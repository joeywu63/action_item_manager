import React from 'react';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';
import styled from 'styled-components';

const SidebarWrapper = styled.div`    
    margin-right: auto;
`;

class Dashboard extends React.Component {
    render() {
        return (
            <SidebarWrapper>
                <MainSideBar>
                </MainSideBar>
            </SidebarWrapper>
        );
    }
}

export default Dashboard;