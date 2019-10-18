import React from 'react';

import ActionItemPanel from 'apps/ActionItems/components/ActionItemPanel';

import CreateActionItem from './CreateActionItem';
import ManageTeam from './ManageTeam';

import Button from 'common/Button';
import Header from 'common/Header';
import LoadingIndicator from 'common/LoadingIndicator';

import { getTeamActionItems } from '../repository';
import { ACTIONS } from '../constants';

import { canManageTeam } from 'utils/currentUser';

class Team extends React.Component {
    async componentDidMount() {
        const { teamID } = this.props.location.state.team;

        const teamActionItems = await getTeamActionItems({ teamID });
        this.setState({ loading: false, teamActionItems });
    }

    state = {
        loading: true,
        teamActionItems: [],
        page: ACTIONS.default
    };

    handleSwitchPage = page => {
        this.setState({ page });
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

    renderManagerActions = () => (
        <>
            <Button
                text="Create Action Item"
                onClick={() => this.handleSwitchPage(ACTIONS.create)}
            />
            <Button
                text="Manage Team"
                onClick={() => this.handleSwitchPage(ACTIONS.manage)}
            />
        </>
    );

    render() {
        const { name, managerID, teamID } = this.props.location.state.team;
        const { loading, page } = this.state;

        return (
            <>
                <Header title={name} />
                {canManageTeam(managerID) && page === ACTIONS.default
                    ? this.renderManagerActions()
                    : null}
                {loading ? (
                    <LoadingIndicator />
                ) : page === ACTIONS.create ? (
                    <CreateActionItem
                        teamID={teamID}
                        handleGoBack={() =>
                            this.handleSwitchPage(ACTIONS.default)
                        }
                    />
                ) : page === ACTIONS.manage ? (
                    <ManageTeam
                        handleGoBack={() =>
                            this.handleSwitchPage(ACTIONS.default)
                        }
                        teamID={teamID}
                    />
                ) : (
                    this.renderTeamActionItems()
                )}
            </>
        );
    }
}

export default Team;
