import React from 'react';
import styled from 'styled-components';

import TeamRow from './TeamRow';
import AddTeamForm from './AddTeamForm';

import Header from 'common/Header';

import { getAllTeams } from '../repository';

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

class TeamTable extends React.Component {
    async componentDidMount() {
        const allTeams = await getAllTeams();
        this.setState({ teams: allTeams });
    }

    state = {
        teams: [],
        newTeamName: '',
        selectedUser: null
    };

    handleRemoveTeam = team => {
        const { removeTeam } = this.props;
        const { teams } = this.state;
        removeTeam({ teamId: team.id });

        this.setState({
            teams: teams
        });
    };

    handleAddTeam = () => {
        const { addTeam } = this.props;
        const { teams, newTeamName, selectedUser } = this.state;

        addTeam({
            teamName: newTeamName,
            managerID: selectedUser.id
        });

        this.setState({
            teams: teams
        });
    };

    handleNameChange = e => {
        this.setState({ newTeamName: e.target.value });
    };

    handleUserChange = user => {
        this.setState({ selectedUser: user });
    };

    handleAddTeam = () => {
        const customerID = getCurrentUser().customerID;
        const { addTeam } = this.props;
        const { teams, newTeamName, selectedUser } = this.state;

        addTeam({
            teamName: newTeamName,
            managerID: selectedUser.id,
            customerID: customerID
        });

        this.setState({
            teams: teams
        });
    };

    handleNameChange = e => {
        this.setState({ newTeamName: e.target.value });
    };

    handleUserChange = user => {
        this.setState({ selectedUser: user });
    };

    render() {
        const { teams } = this.state;

        let rows = [];
        teams.forEach(team => {
            rows.push(
                <TeamRow
                    key={team.id}
                    team={team}
                    removeTeam={this.handleRemoveTeam}
                />
            );
        });

        return (
            <div>
                <Header title="Teams" size="medium" />
                <AddTeamForm
                    newTeamName={this.state.newTeamName}
                    selectedUser={this.state.selectedUser}
                    addTeam={this.handleAddTeam}
                    onChangeName={this.handleNameChange}
                    onChangeUser={this.handleUserChange}
                />
                <Table>
                    <TableHead>
                        <tr>
                            <TableHeader>Team ID</TableHeader>
                            <TableHeader>Team Name</TableHeader>
                            <TableHeader>Team Manager</TableHeader>
                            <TableHeader>Disband Team</TableHeader>
                        </tr>
                    </TableHead>
                    <tbody>{rows}</tbody>
                </Table>
            </div>
        );
    }
}

export default TeamTable;
