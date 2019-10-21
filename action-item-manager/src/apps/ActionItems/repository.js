import * as actionItem from 'model/actionItem';

export const getActionItemsForCurrentUser = () => {
    return actionItem.getByCurrentUser();
};

export const toggleActionItemComplete = actionItem.toggleActionItemComplete;

export const didComplete = actionItem.didComplete;
