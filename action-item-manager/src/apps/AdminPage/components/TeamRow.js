import React from 'react';
import styled from 'styled-components';
import Dropdown from 'common/Dropdown';
import Button from 'common/Button';
import { setManager, getByID, getByCustomer } from '../repository';

const TableData = styled.td`
    border: 1px solid LightGrey;
    height: 100%;
    text-align: center;
    vertical-align: middle;
`;

class TeamRow extends React.Component {
    componentDidMount() {
        const { team } = this.props;

        const allUsers = getByCustomer({ customerID: team.customerID });
        let regUsers = allUsers
            .filter(user => user.id !== team.managerID)
            .map(user => {
                return {
                    ...user,
                    value: user.id,
                    label: `${user.firstName} ${user.lastName}`
                };
            });
        let currManager = getByID({ userID: team.managerID });

        this.setState({
            manager: `${currManager.firstName} ${currManager.lastName}`,
            otherUsers: regUsers
        });
    }

    state = {
        manager: null,
        selectedUser: null,
        otherUsers: []
    };

    handleChange = user => {
        const { team } = this.props;
        const { otherUsers } = this.state;

        const prevManager = getByID({ userID: team.managerID });
        prevManager.value = prevManager.id;
        prevManager.label = `${prevManager.firstName} ${prevManager.lastName}`;

        const i = otherUsers.indexOf(user);
        otherUsers.push(prevManager);
        otherUsers.splice(i, 1);

        setManager({ teamId: team.id, managerId: user.id });

        this.setState({
            manager: `${user.firstName} ${user.lastName}`,
            selectedUser: user,
            otherUsers: otherUsers
        });
    };

    render() {
        const { team, removeTeam } = this.props;
        const { manager, selectedUser, otherUsers } = this.state;

        return (
            <tr>
                <TableData>{team.id}</TableData>
                <TableData>{team.name}</TableData>
                <TableData>
                    <Dropdown
                        placeholder={manager}
                        value={selectedUser}
                        onChange={this.handleChange}
                        options={otherUsers}
                    />
                </TableData>
                <TableData>
                    <Button text="Disband" onClick={() => removeTeam(team)} />
                </TableData>
            </tr>
        );
    }
}

export default TeamRow;