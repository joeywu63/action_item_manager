import React from 'react';
import styled from 'styled-components';

import Button from 'common/Button';
import Header from 'common/Header';

<<<<<<< HEAD
import TeamTable from './TeamTable';
=======
import UserTable from './TeamTable';
>>>>>>> 0b570c8ab9b323d4e576642854ab2888437c47e1

import { getAllTeams, addTeamToList, removeTeamFromList } from 'model/team'

class Admin extends React.Component {

    state = {
        teams: getAllTeams()
    };

    render() {
        return (
            <>
                <Header title="Welcome, Admin"/>
<<<<<<< HEAD
                <TeamTable teams={this.state.teams}
=======
                <UserTable teams={this.state.teams}
>>>>>>> 0b570c8ab9b323d4e576642854ab2888437c47e1
                           removeTeam={removeTeamFromList}
                           addTeam={addTeamToList}/>
            </>
        );
    }
}

export default Admin;