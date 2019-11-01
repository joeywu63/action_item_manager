import * as actionItem from 'model/actionItem';
import * as team from 'model/team';

export const getActionItemsForCurrentUser = actionItem.getByCurrentUser;

export const getTeamByID = ({ teamId }) => {
    return team.getByID({ teamId });
};

export const getSize = ({ teamId }) => {
    return team.getSize({ teamId });
};

export const updateTitle = ({ id, newTitle }) => {
    return actionItem.updateTitle({ id, newTitle });
};

export const updateDescription = ({ id, newDesc }) => {
    return actionItem.updateDescription({ id, newDesc });
};

export const updateDueDate = ({ id, newDueDate }) => {
    return actionItem.updateDueDate({ id, newDueDate });
};

export const toggleActionItemComplete = actionItem.toggleActionItemComplete;

export const didComplete = actionItem.didComplete;
