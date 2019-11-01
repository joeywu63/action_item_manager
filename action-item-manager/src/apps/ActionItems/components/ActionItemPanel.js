import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Panel from 'common/Panel';

const ActionItemPanel = ({ actionItem, history }) => {
    const {
        actionItemID,
        title,
        description,
        teamID,
        dueDate,
        userIDList
    } = actionItem;

    const navigateParams = {
        pathname: `/action-items/${actionItemID}`,
        state: { actionItem }
    };

    return (
        <Panel onClick={() => history.push(navigateParams)}>
            <b>{title}</b>
            <div>Due Date: {dueDate}</div>
            <div>{description}</div>
        </Panel>
    );
};

ActionItemPanel.propTypes = {
    actionItem: PropTypes.object.isRequired
};

export default withRouter(ActionItemPanel);
