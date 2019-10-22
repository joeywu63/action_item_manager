import * as team from 'model/team';
import * as user from 'model/user';

export const createTeam = ({ teamName, managerID, customerID }) => {
    return team.addTeamToList({ teamName, managerID, customerID });
};

export const removeTeam = ({ teamId }) => {
    return team.removeTeamFromList({ teamId });
};

export const getAllTeams = () => {
    return team.getAllTeams();
};

export const setManager = ({ teamId, managerId }) => {
    return team.setManager({ teamId, managerId });
};

export const getByCustomer = ({ customerID }) => {
    return user.getByCustomer({ customerID });
};

export const getByID = ({ userID }) => {
    return user.getByID({ userID });
};
