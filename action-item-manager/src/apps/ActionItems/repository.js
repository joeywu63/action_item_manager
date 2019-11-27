import * as actionItem from 'model/actionItem';
import axios from 'axios';

export const getActionItemsForCurrentUser = actionItem.getByCurrentUser;

export const getTeamByID = ({ teamID }) =>
    axios
        .get(`/team/${teamID}`)
        .then(response => response.data.team)
        .catch(error => error);

export const getSize = ({ teamID }) =>
    axios
        .get(`/team/size/${teamID}`)
        .then(response => response.data.size)
        .catch(error => error);

export const update = actionItem.update;

export const toggleActionItemComplete = actionItem.toggleActionItemComplete;

export const didComplete = actionItem.didComplete;
