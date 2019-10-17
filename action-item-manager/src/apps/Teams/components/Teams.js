import React from 'react';
import styled from 'styled-components';

import TeamPanel from './TeamPanel';

import PageWrapper from 'common/PageWrapper';
import Header from 'common/Header';
import LoadingIndicator from 'common/LoadingIndicator';

import { getTeams } from '../repository';

const TeamsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

class Teams extends React.Component {
    async componentDidMount() {
        const teams = await getTeams();
        this.setState({ loading: false, teams });
    }

    state = {
        loading: true,
        teams: []
    };

    renderTeams = () => {
        const { teams } = this.state;

        return (
            <TeamsWrapper>
                {teams.map(team => (
                    <TeamPanel key={team.teamID} team={team} />
                ))}
            </TeamsWrapper>
        );
    };

    render() {
        const { loading } = this.state;

        return (
            <PageWrapper>
                <Header title="My Teams" />
                {loading ? <LoadingIndicator /> : this.renderTeams()}
            </PageWrapper>
        );
    }
}

export default Teams;
