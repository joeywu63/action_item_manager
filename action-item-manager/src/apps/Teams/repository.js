import * as actionItem from 'model/actionItem';
import axios from 'axios';

import { getCurrentUser } from 'utils/currentUser';

export const getTeams = () => {
    const currentUser = getCurrentUser();

    return axios
        .post('/team/teamsFromList', { teamList: currentUser.teamIDList })
        .then(response => response.data.teams)
        .catch(error => error);
};

export const getTeamActionItems = actionItem.getByTeam;

export const createActionItem = actionItem.create;

export const getTeamUsers = ({ teamID }) =>
    axios
        .get(`/team/users/${teamID}`)
        .then(response => response.data.users)
        .catch(error => error);

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
