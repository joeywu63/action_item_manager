import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import Dropdown from 'common/Dropdown';
import UserPanel from 'common/UserPanel';

import { getUsersNotOnTeam, getTeamUsers } from '../repository';

class ManageTeam extends React.Component {
    async componentDidMount() {
        const { teamID } = this.props;

        let allUsers = await getUsersNotOnTeam({ teamID });
        let teamUsers = await getTeamUsers({ teamID });

        allUsers = allUsers.map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });
        teamUsers = teamUsers.map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });

        this.setState({
            allUsers,
            teamUsers,
            loading: false
        });
    }

    state = {
        loading: true,
        selectedUser: null,

        allUsers: [],
        teamUsers: []
    };

    handleAddUser = () => {

    };

    handleChange = user => {
        this.setState({ selectedUser: user });
    };

    renderUsers = () => {
        const { teamUsers } = this.state;

        return teamUsers.map(user => <UserPanel key={user.id} user={user} />);
    };

    render() {
        const { handleGoBack } = this.props;
        const { selectedUser, allUsers } = this.state;

        return (
            <div>
                <Button text="Back" onClick={handleGoBack} />
                <Dropdown
                    placeholder="Select User..."
                    value={selectedUser}
                    onChange={this.handleChange}
                    options={allUsers}
                />
                <Button
                    text="Add User"
                    onClick={this.handleAddUser}
                />
                {this.renderUsers()}
            </div>
        );
    }
}

ManageTeam.propTypes = {
    handleGoBack: PropTypes.func.isRequired,
    teamID: PropTypes.number.isRequired
};

export default ManageTeam;
