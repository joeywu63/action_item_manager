import React from 'react';
import styled from 'styled-components';

import UserRow from './UserRow';

import Header from 'common/Header';

import { getUsers, removeUser } from '../repository';

const Table = styled.table`
    min-width:100%;
    max-width:100%;
    white-space:nowrap;
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
    async componentDidMount() {
        const users = await getUsers();

        this.setState({ users });
    }

    state = {
        users: []
    };

    handleRemoveUser = async userID => {
        const { users } = this.state;

        await removeUser({ userID });

        this.setState({ users });
    };

    renderRows = () => {
        const { users } = this.state;
        return (
            <tbody>
                {users.map(user => (
                    <UserRow
                        key={user._id}
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
            </Wrapper>
        );
    }
}

export default UserTable;
