import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Panel from 'common/Panel';
import { didComplete } from '../repository';
import { getCurrentUser } from 'utils/currentUser';

const CompletedIcon = styled.div`
    width: 100px;
    height: 25px;
    background: green;
    color: white;
    text-align: center;
    border-radius: 4px;
    margin-right: 20px;
    float: left;
`;

const IncompleteIcon = styled.div`
    width: 100px;
    height: 25px;
    background: red;
    color: white;
    text-align: center;
    border-radius: 4px;
    margin-right: 20px;
    float: left;
`;

const ActionItemDisplay = styled.div`
    float: left;
`;

const DisplayWrapper = styled.div`
    overflow: hidden;
`;

const StyledDate = styled.div`
    font-size: 12px;
`;

const ActionItemPanel = ({ actionItem, history }) => {
    const { actionItemID, title, dueDate } = actionItem;

    const navigateParams = {
        pathname: `/action-items/${actionItemID}`,
        state: { actionItem }
    };
    const currentUser = getCurrentUser();
    const complete = didComplete({ userID: currentUser._id, actionItemID });

    const renderComplete = () => {
        if (complete) {
            return <CompletedIcon> Completed </CompletedIcon>;
        } else {
            return <IncompleteIcon> Incomplete </IncompleteIcon>;
        }
    };

    return (
        <Panel onClick={() => history.push(navigateParams)}>
            <DisplayWrapper>
                {renderComplete()}
                <ActionItemDisplay>
                    <b>{title}</b>
                    <StyledDate>Due Date: {dueDate}</StyledDate>
                </ActionItemDisplay>
            </DisplayWrapper>
        </Panel>
    );
};

ActionItemPanel.propTypes = {
    actionItem: PropTypes.object.isRequired
};

export default withRouter(ActionItemPanel);
