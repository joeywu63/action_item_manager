import React from 'react';
import Header from 'common/Header';

import TeamTable from './TeamTable';

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
            </>
        );
    }
}

export default Admin;
