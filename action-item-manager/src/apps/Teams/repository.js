import * as actionItem from 'model/actionItem';
import * as team from 'model/team';
import axios from 'axios';

export const getTeams = team.getTeamsByCurrentUser;

export const getTeamActionItems = actionItem.getByTeam;

export const createActionItem = actionItem.create;

export const getTeamUsers = team.getUsers;

export const addUserToTeam = ({ userID, teamID }) =>
    axios
        .post(`/user/addToTeam`, { userID, teamID })
        .then(response => console.log(response))
        .catch(error => error);

export const removeUserFromTeam = ({ userID, teamID }) => {
    axios
        .delete(`/user/removeFromTeam`, { userID, teamID })
        .then(response => console.log(response))
        .catch(error => error);
};
