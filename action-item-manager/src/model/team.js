import { getCurrentUser } from 'utils/currentUser';
import { getByCustomer } from 'model/user';

const teams = [
    {
        id: 1,
        name: 'Engineering',
        managerID: 1,
        customerID: 1,
        userIDList: [1, 2] // TODO: potentially change to number of people
    },
    {
        id: 2,
        name: 'Some Sub Team',
        managerID: 2,
        customerID: 1,
        userIDList: [3, 4]
    }
];

export const getTeamsByCurrentUser = () => {
    const currentUser = getCurrentUser();

    return teams.filter(team => currentUser.teamIDList.includes(team.id));
};

export const getTeamsByCustomer = () => {};

export const getUsers = ({ teamID }) => {
    // return two arrays. One of users on the team specified, and one of users not on the team specified
    const users = getByCustomer({ customerID: 1 });

    const onTeam = users.filter(user => user.teamIDList.includes(teamID));
    const offTeam = users.filter(user => !user.teamIDList.includes(teamID));

    return { onTeam, offTeam };
};

export const addUser = () => {};

export const removeUser = () => {};
