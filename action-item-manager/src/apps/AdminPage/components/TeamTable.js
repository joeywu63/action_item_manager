import React from 'react';
import styled from 'styled-components';

import TeamRow from './TeamRow';

const Table = styled.table`
    width: 100%;
    margin: 0;
    border-spacing: 0;
    border-collapse: collapse;
    border: 1px solid black
    table-layout: fixed;
`;

const TableHead = styled.thead`
    font-size: 4vh;
    font-weight: bold;
    text-align: left;
    padding 2;
`;

const TableHeader = styled.th`
    font-size: 3vh;
    font-weight: bold;
    border: 1px solid black
    text-align: center;
    vertical-align: middle;
`;

class TeamTable extends React.Component {
    componentDidMount() {
        const teams = this.props.teams;
        this.setState({ teams });
    }

    state = {
        teams: []
    };

    // todo: handle adding teams

    handleRemoveTeam = team => {
        const { removeTeam } = this.props;
        const newTeams = removeTeam({ teamId: team.id });

        this.setState({
            teams: newTeams
        });
    };

    render() {
        const { teams } = this.props;

        let rows = [];
        teams.forEach(team => {
            rows.push(
                <TeamRow team={team} removeTeam={this.handleRemoveTeam} />
            );
        });

        return (
            <Table id="table">
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
        );
    }
}

export default TeamTable;
