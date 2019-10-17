import React from 'react';
import styled from 'styled-components';

import RouterButton from 'common/RouterButton';

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-right: 0.5px solid black;
`;

class MainSideBar extends React.Component {
    render() {
        return (
            <SideBarWrapper>
                <RouterButton link="/account-info" title="Account Info" />
                <RouterButton link="/teams" title="Teams" />
                <RouterButton link="/action-items" title="Action Items" />
            </SideBarWrapper>
        );
    }
}

export default MainSideBar;
