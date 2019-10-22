import * as team from 'model/team';

export const createTeam = ({ teamName, managerID, customerID }) => {
    return team.addTeamToList({ teamName, managerID, customerID });
}

export const removeTeam = ({ teamId }) => {
    return team.removeTeamFromList({ teamId });
}
