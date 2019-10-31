import React from 'react';

import Header from 'common/Header';
import Button from 'common/Button';

import {
    toggleActionItemComplete,
    didComplete,
    getTeamByID,
    getActionItemByID,
    updateDescription,
    updateTitle
} from '../repository';
import { getCurrentUser } from 'utils/currentUser';

class ActionItem extends React.Component {
    componentDidMount() {
        const {
            actionItemID,
            title,
            description
        } = this.props.location.state.actionItem;
        const { currentUser } = this.state;

        const complete = didComplete({ userID: currentUser.id, actionItemID });
        const teamId = getActionItemByID({ actionItemId: actionItemID }).teamID;
        const canEdit = currentUser.id === getTeamByID({ teamId }).managerID;
        this.setState({
            title: title,
            description: description,
            newTitle: title,
            newDescription: description,
            complete,
            canEdit,
            editing: false
        });
    }

    state = {
        currentUser: getCurrentUser(),
        title: null,
        description: null,
        newTitle: null,
        newDescription: null,
        complete: false,
        canEdit: false,
        editing: false
    };

    handleMarkAsComplete = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { complete, currentUser } = this.state;

        await toggleActionItemComplete({
            userID: currentUser.id,
            isComplete: !complete,
            actionItemID
        });
        this.setState({ complete: !complete });
    };

    handleEdit = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { editing, newTitle, newDescription } = this.state;

        if (editing) {
            updateTitle({ id: actionItemID, newTitle: newTitle });
            updateDescription({ id: actionItemID, newDesc: newDescription });
            this.setState({
                editing: !editing,
                title: newTitle,
                description: newDescription
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

    renderEditBar = () => {
        const { editing, newTitle, newDescription } = this.state;
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
                </>
            );
        }
    };

    render() {
        const { title, description, complete } = this.state;

        return (
            <>
                <Header title={title} />
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
