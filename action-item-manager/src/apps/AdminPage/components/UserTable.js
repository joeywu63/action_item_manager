import React from 'react';
import styled from 'styled-components';

import AddUserForm from './AddUserForm';
import UserRow from './UserRow';

import Header from 'common/Header';

import { getUsers, createUser, removeUser } from '../repository';

const Table = styled.table`
    margin: 0;
    border-spacing: 0;
    border-collapse: collapse;
    border: 1px solid black
    table-layout: fixed;
`;

const TableHead = styled.thead`
    font-weight: bold;
    text-align: left;
    padding 2;
`;

const TableHeader = styled.th`
    font-weight: bold;
    border: 1px solid black
    text-align: center;
    vertical-align: middle;
`;

const Wrapper = styled.div`
    margin-top: 20px;
`;

class UserTable extends React.Component {
    componentDidMount() {
        const users = getUsers();

        this.setState({ users });
    }

    state = {
        users: []
    };

    handleCreateUser = (email, firstName, lastName, role) => {
        const { users } = this.state;

        // TODO: This needs to push to the users array once connected to server.
        // we dont need to right now because the users array is pointing to the array in the model
        const newUser = createUser({ email, firstName, lastName, role });

        this.setState({ users });
    };

    handleRemoveUser = userID => {
        const { users } = this.state;

        removeUser({ userID });

        this.setState({ users });
    };

    renderRows = () => {
        const { users } = this.state;
        return (
            <tbody>
                {users.map(user => (
                    <UserRow
                        key={user.id}
                        user={user}
                        handleRemoveUser={this.handleRemoveUser}
                    />
                ))}
            </tbody>
        );
    };

    render() {
        return (
            <Wrapper>
                <Header title="Users" size="medium" />
                <Table>
                    <TableHead>
                        <tr>
                            <TableHeader>First Name</TableHeader>
                            <TableHeader>Last Name</TableHeader>
                            <TableHeader>Email</TableHeader>
                            <TableHeader>Role</TableHeader>
                            <TableHeader>Remove User</TableHeader>
                        </tr>
                    </TableHead>
                    {this.renderRows()}
                </Table>
                <AddUserForm handleCreateUser={this.handleCreateUser} />
            </Wrapper>
        );
    }
}

export default UserTable;
