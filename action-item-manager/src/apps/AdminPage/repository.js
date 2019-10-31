import * as team from 'model/team';
import * as user from 'model/user';

export const createTeam = team.addTeamToList;

export const removeTeam = team.removeTeamFromList;

export const getAllTeams = team.getAllTeams;

export const setManager = team.setManager;

export const getByCustomer = user.getByCustomer;

export const getByID = user.getByID;
