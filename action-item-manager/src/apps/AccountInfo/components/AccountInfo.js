import React from 'react'
import styled from 'styled-components';
import MainSideBar from 'apps/MainSideBar/components/MainSideBar';

const SidebarWrapper = styled.div`    
    margin-right: auto;
`;

const Title = styled.div`
    margin-right: auto;
`;

class AccountInfo extends React.Component {
    render() {
        return (
            <>
            <SidebarWrapper>
                <MainSideBar>
                </MainSideBar>
            </SidebarWrapper>
            <Title>
                Account Info
            </Title>
            </>
        );
    }
}

export default AccountInfo