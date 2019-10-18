import * as actionItem from 'model/actionItem';

export const getActionItemsForCurrentUser = () => {
    return actionItem.getByCurrentUser();
};