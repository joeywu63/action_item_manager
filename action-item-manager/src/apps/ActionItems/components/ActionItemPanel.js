import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Panel from 'common/Panel';
import { didComplete, getTeamByID } from '../repository';
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
    display: flex;
    align-items: center;
`;

const StyledTeamName = styled.div`
    padding-left: 20px;
`;

const StyledDate = styled.div`
    font-size: 12px;
`;

class ActionItemPanel extends React.Component {
    async componentDidMount() {
        const { displayTeamName, actionItem } = this.props;
        const { teamID } = actionItem;
        if (displayTeamName) {
            const team = await getTeamByID({ teamID });
            this.setState({ team });
        }
    }

    state = {
        team: null
    };

    renderComplete = () => {
        const { _id } = this.props.actionItem;
        const currentUser = getCurrentUser();
        const complete = didComplete({
            userID: currentUser._id,
            actionItemID: _id
        });
        if (complete) {
            return <CompletedIcon> Completed </CompletedIcon>;
        } else {
            return <IncompleteIcon> Incomplete </IncompleteIcon>;
        }
    };

    renderTeamName = () => {
        const { team } = this.state;
        return (
            <StyledTeamName>
                <b>{team.name}</b>
            </StyledTeamName>
        );
    };
    render() {
        const { actionItem, history } = this.props;
        const { _id, title, dueDate } = actionItem;
        const { team } = this.state;

        const navigateParams = {
            pathname: `/action-items/${_id}`,
            state: { actionItem }
        };

        return (
            <Panel onClick={() => history.push(navigateParams)}>
                <DisplayWrapper>
                    {this.renderComplete()}
                    <ActionItemDisplay>
                        <b>{title}</b>
                        <StyledDate>Due Date: {dueDate}</StyledDate>
                    </ActionItemDisplay>
                    {team && this.renderTeamName()}
                </DisplayWrapper>
            </Panel>
        );
    }
}

ActionItemPanel.propTypes = {
    actionItem: PropTypes.object.isRequired,
    displayTeamName: PropTypes.bool
};

ActionItemPanel.defaultProps = {
    displayTeamName: false
};

export default withRouter(ActionItemPanel);
