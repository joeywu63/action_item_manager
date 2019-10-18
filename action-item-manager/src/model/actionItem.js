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
        dateCreated: '2019-01-01'
    },
    {
        actionItemID: 2,
        title: 'Some Other Title for Some Other Action Item',
        description:
            'Some other description to complete some task you probably dont want to do',
        customerID: 1,
        teamID: 1,
        dueDate: '2019-12-12',
        dateCreated: '2019-01-01'
    },
    {
        actionItemID: 3,
        title: 'Action Item for Team 2',
        description:
            'Some other description to complete some task you probably dont want to do',
        customerID: 1,
        teamID: 2,
        dueDate: '2019-12-12',
        dateCreated: '2019-01-01'
    }
];
let actionItemsCounter = 4;

export const create = ({ customerID, teamID, title, description, dueDate }) => {
    actionItems.push({
        actionItemID: actionItemsCounter,
        title,
        description,
        customerID,
        teamID,
        dueDate,
        dateCreated: '2019-01-01'
    });

    actionItemsCounter++;
};

export const getByTeam = ({ teamID }) => {
    return actionItems.filter(actionItem => actionItem.teamID === teamID);
};

export const getByCurrentUser = () => {
    const currentUser = getCurrentUser();

    return actionItems.filter(actionItem => currentUser.teamIDList.includes(actionItem.teamID));
};
