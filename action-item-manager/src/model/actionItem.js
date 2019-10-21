import { getCurrentUser } from 'utils/currentUser';

const actionItems = [
    {
        actionItemID: 1,
        title: 'Some Title for Some Action Item',
        description:
            'The following are the steps to do something: 1. turn off your computer, 2. go home',
        customerID: 1,
        teamID: 1,
        dueDate: '2019-12-12',
        dateCreated: '2019-01-01',
        userIDList: []
    },
    {
        actionItemID: 2,
        title: 'Some Other Title for Some Other Action Item',
        description:
            'Some other description to complete some task you probably dont want to do',
        customerID: 1,
        teamID: 1,
        dueDate: '2019-12-12',
        dateCreated: '2019-01-01',
        userIDList: []
    },
    {
        actionItemID: 3,
        title: 'Action Item for Team 2',
        description:
            'Some other description to complete some task you probably dont want to do',
        customerID: 1,
        teamID: 2,
        dueDate: '2019-12-12',
        dateCreated: '2019-01-01',
        userIDList: []
    }
];
let actionItemsCounter = 4;

export const create = ({ customerID, teamID, title, description, dueDate }) => {
    const newActionItem = {
        actionItemID: actionItemsCounter,
        title,
        description,
        customerID,
        teamID,
        dueDate,
        dateCreated: '2019-01-01'
    };

    actionItems.push(newActionItem);
    actionItemsCounter++;

    return newActionItem;
};

export const getByTeam = ({ teamID }) => {
    return actionItems.filter(actionItem => actionItem.teamID === teamID);
};

export const getByCurrentUser = () => {
    const currentUser = getCurrentUser();

    return actionItems.filter(actionItem =>
        currentUser.teamIDList.includes(actionItem.teamID)
    );
};

export const toggleActionItemComplete = ({
    userID,
    actionItemID,
    isComplete
}) => {
    actionItems.forEach(actionItem => {
        if (actionItem.actionItemID === actionItemID) {
            if (isComplete) {
                actionItem.userIDList.push(userID);
            } else {
                const index = actionItem.userIDList.indexOf(userID);
                actionItem.userIDList.splice(index, 1);
            }
        }
    });
};

export const didComplete = ({ userID, actionItemID }) => {
    let completed = false;

    actionItems.forEach(actionItem => {
        if (actionItem.actionItemID === actionItemID) {
            const index = actionItem.userIDList.indexOf(userID);
            completed = index !== -1;
        }
    });

    return completed;
};
