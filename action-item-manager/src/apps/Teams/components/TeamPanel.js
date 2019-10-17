import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Panel from 'common/Panel';

const TeamName = styled.b`
    font-size: 20px;
`;

const TeamPanel = ({ team, history }) => {
    const { teamID, name, managerID, userIDList } = team;

    return (
        <Panel onClick={() => history.push(`/teams/${teamID}`)}>
            <TeamName>{name}</TeamName>
            <div>{`${userIDList.length} members`}</div>
        </Panel>
    );
};

TeamPanel.propTypes = {
    team: PropTypes.object.isRequired
};

export default withRouter(TeamPanel);
