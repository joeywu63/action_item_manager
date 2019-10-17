import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Panel from 'common/Panel';

const TeamName = styled.b`
    font-size: 20px;
`;

const TeamPanel = ({ teamID, name, managerID, userIDList }) => {
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
    teamID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    managerID: PropTypes.number.isRequired,
    userIDList: PropTypes.array.isRequired
};

export default TeamPanel;