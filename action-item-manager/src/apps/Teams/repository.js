import * as actionItem from 'model/actionItem';
import * as team from 'model/team';
import * as user from 'model/user';

export const getTeams = team.getTeamsByCurrentUser;

export const getTeamActionItems = actionItem.getByTeam;

export const createActionItem = actionItem.create;

export const getTeamUsers = team.getUsers;

export const addUserToTeam = user.addToTeam;

export const removeUserFromTeam = user.removeFromTeam;
