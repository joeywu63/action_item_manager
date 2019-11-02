import React from 'react';
import styled from 'styled-components';

import Header from 'common/Header';
import Button from 'common/Button';

import {
    toggleActionItemComplete,
    didComplete,
    getSize,
    getTeamByID,
    update
} from '../repository';
import { getCurrentUser } from 'utils/currentUser';

const StyledButton = styled(Button)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

class ActionItem extends React.Component {
    componentDidMount() {
        const {
            actionItemID,
            title,
            description,
            teamID,
            dueDate,
            userIDList
        } = this.props.location.state.actionItem;
        const { currentUser } = this.state;

        const complete = didComplete({ userID: currentUser.id, actionItemID });
        const canEdit =
            currentUser.id === getTeamByID({ teamId: teamID }).managerID;
        const teamSize = getSize({ teamId: teamID });

        this.setState({
            title,
            description,
            newTitle: title,
            newDescription: description,
            dueDate,
            newDueDate: dueDate,
            complete,
            canEdit,
            editing: false,
            teamSize: teamSize,
            completedBy: userIDList.length
        });
    }

    state = {
        currentUser: getCurrentUser(),
        title: null,
        description: null,
        newTitle: null,
        newDescription: null,
        dueDate: null,
        newDueDate: null,
        complete: false,
        canEdit: false,
        editing: false,
        teamSize: 0,
        completedBy: 0
    };

    handleMarkAsComplete = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { complete, currentUser, completedBy } = this.state;

        await toggleActionItemComplete({
            userID: currentUser.id,
            isComplete: !complete,
            actionItemID
        });

        if (complete) {
            this.setState({
                complete: !complete,
                completedBy: completedBy - 1
            });
        } else {
            this.setState({
                complete: !complete,
                completedBy: completedBy + 1
            });
        }
    };

    handleSubmit = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { editing, newTitle, newDescription, newDueDate } = this.state;

        update({
            id: actionItemID,
            newTitle: newTitle,
            newDesc: newDescription,
            newDueDate: newDueDate
        });
        this.setState({
            editing: !editing,
            title: newTitle,
            description: newDescription,
            dueDate: newDueDate
        });
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({ [key]: e.target.value });
    };

    handleEdit = () => {
        const { editing } = this.state
        this.setState({ editing: !editing });
    };

    renderEditButton = () => {
        const { canEdit } = this.state;

        if (canEdit === true) {
            return (
                <Button text={'Edit Action Item'} onClick={this.handleEdit} />
            );
        }
    };

    renderStatus = () => {
        const { canEdit, teamSize, completedBy } = this.state;

        if (canEdit === true) {
            return (
                <div>
                    Status: Completed by {completedBy}/{teamSize} members
                </div>
            );
        }
    };

    renderEditBar = () => {
        const { editing, newTitle, newDescription, newDueDate } = this.state;
        if (editing === true) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h4>
                            Title:{' '}
                            <input
                                name="newTitle"
                                type="text"
                                value={newTitle}
                                onChange={this.handleChange}
                            />
                        </h4>

                        <h4>
                            Description:{' '}
                            <input
                                name="newDescription"
                                type="text"
                                value={newDescription}
                                onChange={this.handleChange}
                            />
                        </h4>

                        <h4>
                            Due Date:{' '}
                            <input
                                name="newDueDate"
                                type="date"
                                value={newDueDate}
                                onChange={this.handleChange}
                            />
                        </h4>
                        <input type="submit" value="Save Changes" />
                        <Button text="Cancel" onClick={this.handleEdit} />
                    </form>
                </div>
            );
        }
    };

    renderBody() {
        const { title, description, dueDate, complete } = this.state;

        return (
            <>
                <Header title={title} />
                <div>
                    <b>Due Date: {dueDate}</b>
                </div>
                {this.renderStatus()}
                <StyledButton
                    text={complete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    onClick={this.handleMarkAsComplete}
                />
                <div>{description}</div>
                {this.renderEditButton()}
            </>
        );
    }

    render() {
        const { editing } = this.state;

        return (
            <>
                <div>{editing ? this.renderEditBar() : this.renderBody()}</div>
            </>
        );
    }
}

export default ActionItem;
