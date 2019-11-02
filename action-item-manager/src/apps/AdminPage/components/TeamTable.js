import React from 'react';
import styled from 'styled-components';

import TeamRow from './TeamRow';
import AddTeamForm from './AddTeamForm';

import Header from 'common/Header';

import { getAllTeams, createTeam, removeTeam } from '../repository';

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
        const { teams } = this.state;

        removeTeam({ teamId: team.id });

        this.setState({
            teams: teams
        });
    };

    handleAddTeam = (teamName, selectedUser) => {
        const { teams } = this.state;

        createTeam({
            teamName,
            managerID: selectedUser.id
        });

        this.setState({
            teams: teams
        });
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
                <AddTeamForm handleAddTeam={this.handleAddTeam} />
            </div>
        );
    }
}

export default TeamTable;
