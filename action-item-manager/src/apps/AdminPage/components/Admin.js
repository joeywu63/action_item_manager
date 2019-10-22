import React from 'react';

import TeamTable from './TeamTable';
import UserTable from './UserTable';

import Header from 'common/Header';

import { createTeam, removeTeam } from '../repository';

class Admin extends React.Component {

    render() {

        return (
            <>
                <Header title="Welcome, Admin" />
                <TeamTable
                    removeTeam={removeTeam}
                    addTeam={createTeam}
                />
                <UserTable />
            </>
        );
    }
}

export default Admin;
