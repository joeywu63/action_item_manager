import React from 'react';
import PropTypes from 'prop-types';

import Panel from 'common/Panel';

const ActionItemPanel = ({actionItem}) => {
    const { actionItemID, title, description } = actionItem;

    return (
        <Panel onClick={() => console.log(`navigate to action item ${actionItemID}`)}>
            <b>{title}</b>
            <div>
                {description}
            </div>
        </Panel>
    )
};

ActionItemPanel.propTypes = {
    actionItem: PropTypes.object.isRequired
};

export default ActionItemPanel;