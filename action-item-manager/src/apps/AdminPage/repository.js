import * as team from 'model/team';
import * as user from 'model/user';

export const createTeam = team.addTeamToList;

export const removeTeam = team.removeTeamFromList;

export const getAllTeams = team.getAllTeams;

export const setManager = team.setManager;

export const getUsers = user.getList;

export const getByID = user.getByID;

export const createUser = user.create;

export const removeUser = user.remove;