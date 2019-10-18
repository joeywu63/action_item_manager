import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Panel from 'common/Panel';

const TeamName = styled.b`
    font-size: 20px;
`;

const TeamPanel = ({ team, history }) => {
    const { id, name, managerID } = team;

    const navigateParams = {
        pathname: `/teams/${id}`,
        state: { team }
    };

    return (
        <Panel onClick={() => history.push(navigateParams)}>
            <TeamName>{name}</TeamName>
        </Panel>
    );
};

TeamPanel.propTypes = {
    team: PropTypes.object.isRequired
};

export default withRouter(TeamPanel);
