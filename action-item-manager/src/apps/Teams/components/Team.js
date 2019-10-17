import React from 'react';
import PropTypes from 'prop-types';

import ActionItemPanel from 'apps/ActionItems/components/ActionItemPanel';

import Header from 'common/Header';
import LoadingIndicator from 'common/LoadingIndicator';

import { getTeamActionItems } from '../repository';

class Team extends React.Component {
    async componentDidMount() {
        const { teamID } = this.props.location.state.team;

        const teamActionItems = await getTeamActionItems({ teamID });
        this.setState({ loading: false, teamActionItems });
    }

    state = {
        loading: true,
        teamActionItems: []
    };

    renderTeamActionItems = () => {
        const { teamActionItems } = this.state;

        return teamActionItems.map(actionItem => (
            <ActionItemPanel
                key={actionItem.actionItemID}
                actionItem={actionItem}
            />
        ));
    };

    render() {
        const { name } = this.props.location.state.team;
        const { loading } = this.state;

        return (
            <>
                <Header title={name} />
                {loading ? <LoadingIndicator /> : this.renderTeamActionItems()}
            </>
        );
    }
}

Team.propTypes = {
    team: PropTypes.object.isRequired
};

export default Team;
