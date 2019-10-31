import * as actionItem from 'model/actionItem';
import * as team from 'model/team';

export const getActionItemsForCurrentUser = () => {
    return actionItem.getByCurrentUser();
};

export const getTeamByID = ({ teamId }) => {
    return team.getByID({ teamId });
};

export const getActionItemByID = ({ actionItemId }) => {
    return actionItem.getByID({ id: actionItemId });
};

export const updateTitle = ({ id, newTitle }) => {
    return actionItem.updateTitle({ id, newTitle });
};

export const updateDescription = ({ id, newDesc }) => {
    return actionItem.updateDescription({ id, newDesc });
};

export const toggleActionItemComplete = actionItem.toggleActionItemComplete;

export const didComplete = actionItem.didComplete;
