import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Panel from 'common/Panel';

const TeamName = styled.b`
    font-size: 20px;
`;

const TeamPanel = ({ team }) => {
    const { teamID, name, managerID, userIDList } = team;

    return (
        <Panel onClick={() => console.log(`navigate to team ${teamID}`)}>
            <TeamName>{name}</TeamName>
            <div>
                {`${userIDList.length} members`}
            </div>
        </Panel>
    )
};

TeamPanel.propTypes = {
    team: PropTypes.object.isRequired
};

export default TeamPanel;