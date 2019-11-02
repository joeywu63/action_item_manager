import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Panel from 'common/Panel';

const StyledDate = styled.div`
    font-size: 12px;
`;

const ActionItemPanel = ({ actionItem, history }) => {
    const {
        actionItemID,
        title,
        dueDate,
    } = actionItem;

    const navigateParams = {
        pathname: `/action-items/${actionItemID}`,
        state: { actionItem }
    };

    return (
        <Panel onClick={() => history.push(navigateParams)}>
            <b>{title}</b>
            <StyledDate>Due Date: {dueDate}</StyledDate>
        </Panel>
    );
};

ActionItemPanel.propTypes = {
    actionItem: PropTypes.object.isRequired
};

export default withRouter(ActionItemPanel);
