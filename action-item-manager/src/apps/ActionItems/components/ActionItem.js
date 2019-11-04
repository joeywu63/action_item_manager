import React from 'react';
import styled from 'styled-components';

import Header from 'common/Header';
import Button from 'common/Button';
import { ROLES } from 'utils/constants';
import SubmitButton from 'common/SubmitButton';
import Input from 'common/Input';

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
    margin-right: 10px;
`;

const TopBar = styled.div`
    margin-top: 15px;
    margin-bottom: 30px;
`;

const DueDate = styled.div`
    display: inline-block;
    border-bottom: 3px solid black;
    margin-right: 50px;
`;

const Status = styled.div`
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
`;

const CompletedIcon = styled.div`
    display: inline-block;
    width: 100px;
    height: 25px;
    background: green;
    color: white;
    text-align: center;
    border-radius: 4px;
    margin-right: 50px;
`;

const IncompleteIcon = styled.div`
    display: inline-block;
    width: 100px;
    height: 25px;
    background: red;
    color: white;
    text-align: center;
    border-radius: 4px;
    margin-right: 50px;
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
            currentUser.id === getTeamByID({ teamId: teamID }).managerID ||
            currentUser.role === ROLES.admin;
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
        const { editing } = this.state;
        this.setState({ editing: !editing });
    };

    renderEditButton = () => {
        const { canEdit } = this.state;

        if (canEdit === true) {
            return (
                <StyledButton
                    text={'Edit Action Item'}
                    onClick={this.handleEdit}
                />
            );
        }
    };

    renderComplete = () => {
        const { complete } = this.state;

        if (complete) {
            return <CompletedIcon> Completed </CompletedIcon>;
        } else {
            return <IncompleteIcon> Incomplete </IncompleteIcon>;
        }
    };

    renderStatus = () => {
        const { canEdit, teamSize, completedBy } = this.state;

        if (canEdit === true) {
            return (
                <Status>
                    Completed by {completedBy}/{teamSize} members
                </Status>
            );
        }
    };

    renderEditForm = () => {
        const { editing, newTitle, newDescription, newDueDate } = this.state;
        if (editing === true) {
            return (
                <div>
                    <Header title={'Edit Action Item'} />
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            label="Title"
                            name="newTitle"
                            type="text"
                            value={newTitle}
                            handleChange={this.handleChange}
                        />

                        <Input
                            label="Description"
                            name="newDescription"
                            type="text"
                            value={newDescription}
                            handleChange={this.handleChange}
                        />

                        <Input
                            label="Due Date"
                            name="newDueDate"
                            type="date"
                            value={newDueDate}
                            handleChange={this.handleChange}
                        />

                        <StyledButton text="Cancel" onClick={this.handleEdit} />
                        <SubmitButton type="submit" value="Save Changes" />
                    </form>
                </div>
            );
        }
    };

    renderBody() {
        const { title, description, dueDate, complete } = this.state;

        return (
            <>
                <TopBar>
                    {this.renderComplete()}
                    <DueDate>
                        <b>Deadline: {dueDate}</b>
                    </DueDate>
                    {this.renderStatus()}
                </TopBar>
                <Header title={title} />
                <div>{description}</div>
                <div>
                    <StyledButton
                        text={
                            complete ? 'Mark as Incomplete' : 'Mark as Complete'
                        }
                        onClick={this.handleMarkAsComplete}
                    />
                    {this.renderEditButton()}
                </div>
            </>
        );
    }

    render() {
        const { editing } = this.state;

        return (
            <>
                <div>{editing ? this.renderEditForm() : this.renderBody()}</div>
            </>
        );
    }
}

export default ActionItem;
