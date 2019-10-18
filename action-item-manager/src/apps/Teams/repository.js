import * as actionItem from 'model/actionItem';
import * as team from 'model/team';
import * as user from 'model/user';

export const getTeams = () => {
    return team.getTeamsByCurrentUser();
};

export const getTeamActionItems = ({ teamID }) => {
    return actionItem.getByTeam({ teamID });
};

export const assignActionItem = ({
    customerID,
    teamID,
    title,
    description,
    dueDate
}) => {
    actionItem.create({ customerID, teamID, title, description, dueDate });
};

export const getTeamUsers = ({ teamID }) => {
    return team.getUsers({ teamID });
};

export const addUserToTeam = ({ userID, teamID }) => {
    user.addToTeam({ userID, teamID });
};

export const removeUserFromTeam = ({ userID, teamID }) => {
    user.removeFromTeam({ userID, teamID });
};
