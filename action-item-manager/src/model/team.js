import { getCurrentUser } from 'utils/currentUser';
import { getByCustomer } from 'model/user';

let numTeams = 2;

const teams = [
    {
        id: 1,
        name: 'Engineering',
        managerID: 1,
        customerID: 1
    },
    {
        id: 2,
        name: 'Some Sub Team',
        managerID: 2,
        customerID: 1
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

export const setManager = ({ teamId, managerId }) => {
    const team = teams.find(team => team.id === teamId);
    team.managerID = managerId;
};

export const getAllTeams = () => {
    return teams;
};

export const addTeamToList = ({ teamName, managerID, customerID }) => {
    const newTeam = {
        id: numTeams + 1,
        name: teamName,
        managerID: managerID,
        customerID: customerID
    };
    teams.push(newTeam);
    numTeams++;
    return newTeam;
};

export const removeTeamFromList = ({ teamId }) => {
    return teams.forEach((team, i) => {
        if (team.id === teamId) {
            teams.splice(i, 1);
        }
    });
};
