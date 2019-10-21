import React from 'react';
import styled from 'styled-components';

import Button from 'common/Button';
import Header from 'common/Header';

import UserTable from './TeamTable';

import { getAllTeams, addTeamToList, removeTeamFromList } from 'model/team'

class Admin extends React.Component {

    state = {
        teams: getAllTeams()
    };

    render() {
        return (
            <>
                <Header title="Welcome, Admin"/>
                <UserTable teams={this.state.teams}
                           removeTeam={removeTeamFromList}
                           addTeam={addTeamToList}/>
            </>
        );
    }
}

export default Admin;