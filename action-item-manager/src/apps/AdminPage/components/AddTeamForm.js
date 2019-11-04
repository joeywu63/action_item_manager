import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'common/Dropdown';
import Input from 'common/Input';
import SubmitButton from 'common/SubmitButton';

import { getUsers } from '../repository';
import { getCurrentUser } from 'utils/currentUser'
import Label from 'common/Label';

class AddTeamForm extends React.Component {
    componentDidMount() {
        const allUsers = getUsers().map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });

        this.setState({
            users: allUsers,
            selectedUser: getCurrentUser()
        });
    }

    state = {
        users: [],
        teamName: '',
        selectedUser: null
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({
            [key]: e.target.value
        });
    };

    handleUserChange = user => {
        this.setState({ selectedUser: user });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { handleAddTeam } = this.props;
        const { teamName, selectedUser } = this.state;

        handleAddTeam(teamName, selectedUser);
    };

    render() {
        const { users, selectedUser, teamName } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    label="Name"
                    type="text"
                    value={teamName}
                    name="teamName"
                    handleChange={this.handleChange}
                />
                <Label label="Manager">
                    <Dropdown
                        placeholder="Select Team Manager"
                        value={selectedUser}
                        onChange={this.handleUserChange}
                        options={users}
                    />
                </Label>
                <SubmitButton value="Create Team" />
            </form>
        );
    }
}

AddTeamForm.propTypes = {
    handleAddTeam: PropTypes.func.isRequired
};

export default AddTeamForm;
