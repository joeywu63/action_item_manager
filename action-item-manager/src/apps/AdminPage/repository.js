import * as team from 'model/team';
import * as user from 'model/user';
import axios from 'axios';

export const createTeam = team.addTeamToList;

export const removeTeam = team.removeTeamFromList;

export const getAllTeams = team.getAllTeams;

export const setManager = team.setManager;

export const getUsers = () =>
    axios
        .get('/user')
        .then(response => response.data.users)
        .catch(error => error);

export const getByID = ({ userID }) => {
    axios
        .get(`/user/${userID}`)
        .then(response => response.data.user)
        .catch(error => error);
};

export const createUser = user.create; // TODO: replace

export const removeUser = ({ userID }) => {
    axios
        .delete(`/user/remove/${userID}`)
        .catch(error => error);
};
