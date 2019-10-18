import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import Dropdown from 'common/Dropdown';
import UserPanel from 'common/UserPanel';

import { getTeamUsers, addUserToTeam, removeUserFromTeam } from '../repository';

class ManageTeam extends React.Component {
    async componentDidMount() {
        const { teamID } = this.props;

        let { onTeam, offTeam } = await getTeamUsers({ teamID });

        offTeam = offTeam.map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });
        onTeam = onTeam.map(user => {
            return {
                ...user,
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            };
        });

        this.setState({
            offTeam,
            onTeam,
            loading: false
        });
    }

    state = {
        loading: true,
        selectedUser: null,
        offTeam: [],
        onTeam: []
    };

    handleAddUser = async () => {
        const { teamID } = this.props;
        const { selectedUser, offTeam, onTeam } = this.state;

        if (selectedUser === null) {
            return;
        }

        await addUserToTeam({ userID: selectedUser.id, teamID });

        const index = offTeam.indexOf(selectedUser);
        offTeam.splice(index, 1);
        onTeam.push(selectedUser);

        this.setState({ selectedUser: null, onTeam, offTeam });
    };

    handleRemoveUser = async user => {
        const { teamID } = this.props;
        const { offTeam, onTeam } = this.state;

        removeUserFromTeam({ userID: user.id, teamID });

        const index = onTeam.indexOf(user);
        onTeam.splice(index, 1);
        offTeam.push(user);
        this.setState({ onTeam, offTeam });
    };

    handleChange = user => {
        this.setState({ selectedUser: user });
    };

    renderUsers = () => {
        const { onTeam } = this.state;

        return onTeam.map(user => (
            <UserPanel
                key={user.id}
                user={user}
                handleRemoveUser={() => this.handleRemoveUser(user)}
            />
        ));
    };

    render() {
        const { handleGoBack } = this.props;
        const { selectedUser, offTeam } = this.state;

        return (
            <div>
                <Button text="Back" onClick={handleGoBack} />
                <Dropdown
                    placeholder="Select User..."
                    value={selectedUser}
                    onChange={this.handleChange}
                    options={offTeam}
                />
                <Button text="Add User" onClick={this.handleAddUser} />
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
