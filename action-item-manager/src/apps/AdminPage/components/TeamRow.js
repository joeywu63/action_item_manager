import React from 'react';
import styled from 'styled-components';

import Button from 'common/Button';

const TableData = styled.td`
    border: 1px solid LightGrey;
    height: 100%;
    text-align: center;
    vertical-align: middle;
`;

class TeamRow extends React.Component {
    render() {
        const { team, removeTeam } = this.props;

        return (
            <tr>
                <TableData>{team.id}</TableData>
                <TableData>{team.name}</TableData>
                <TableData>{team.managerID}</TableData>
                <TableData>
                    <Button text="Disband" onClick={() => removeTeam(team)} />
                </TableData>
            </tr>
        );
    }
}

export default TeamRow;
