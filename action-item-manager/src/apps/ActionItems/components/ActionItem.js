import React from 'react';

import Header from 'common/Header';
import Button from 'common/Button';

import {
    toggleActionItemComplete,
    didComplete,
    getSize,
    getTeamByID,
    updateDescription,
    updateTitle,
    updateDueDate
} from '../repository';
import { getCurrentUser } from 'utils/currentUser';

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
        const canEdit = currentUser.id === getTeamByID({ teamId: teamID }).managerID;
        const teamSize = getSize({ teamId: teamID })

        this.setState({
            title: title,
            description: description,
            newTitle: title,
            newDescription: description,
            dueDate: dueDate,
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

        if (complete){
            this.setState({ complete: !complete, completedBy: completedBy - 1 });
        } else {
            this.setState({ complete: !complete, completedBy: completedBy + 1});
        }
    };

    handleEdit = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { editing, newTitle, newDescription, newDueDate } = this.state;

        if (editing) {
            updateTitle({ id: actionItemID, newTitle: newTitle });
            updateDescription({ id: actionItemID, newDesc: newDescription });
            updateDueDate({ id: actionItemID, newDueDate: newDueDate });
            this.setState({
                editing: !editing,
                title: newTitle,
                description: newDescription,
                dueDate: newDueDate
            });
        } else {
            this.setState({ editing: !editing });
        }
    };

    handleTitleChange = async e => {
        this.setState({ newTitle: e.target.value });
    };

    handleDescChange = async e => {
        this.setState({ newDescription: e.target.value });
    };

    handleDueDateChange = async e => {
        this.setState({ newDueDate: e.target.value });
    };

    renderEditButton = () => {
        const { canEdit, editing } = this.state;

        if (canEdit === true) {
            return (
                <Button
                    text={editing ? 'Save Changes' : 'Edit Action Item'}
                    onClick={this.handleEdit}
                />
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
    }

    renderEditBar = () => {
        const { editing, newTitle, newDescription, newDueDate } = this.state;
        if (editing === true) {
            return (
                <>
                    <h4>
                        Title:{' '}
                        <input
                            type="text"
                            value={newTitle}
                            onChange={e => this.handleTitleChange(e)}
                        />
                    </h4>

                    <h4>
                        Description:{' '}
                        <input
                            type="text"
                            value={newDescription}
                            onChange={e => this.handleDescChange(e)}
                        />
                    </h4>

                    <h4>
                        Due Date:{' '}
                        <input
                            type="date"
                            value={newDueDate}
                            onChange={e => this.handleDueDateChange(e)}
                        />
                    </h4>
                </>
            );
        }
    };

    render() {
        const { title, description, dueDate, complete } = this.state;

        return (
            <>
                <Header title={title} />
                <div><b>Due Date: {dueDate}</b></div>
                {this.renderStatus()}
                <div>{description}</div>
                <Button
                    text={complete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    onClick={this.handleMarkAsComplete}
                />
                {this.renderEditButton()}
                <div>{this.renderEditBar()}</div>
            </>
        );
    }
}

export default ActionItem;
