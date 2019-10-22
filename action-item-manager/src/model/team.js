import { getCurrentUser } from 'utils/currentUser';
import { getList } from 'model/user';

let numTeams = 2;

let numTeams = 2;

let numTeams = 2;

const teams = [
    {
        id: 1,
        name: 'Engineering',
        managerID: 1
    },
    {
        id: 2,
        name: 'Some Sub Team',
        managerID: 2
    }
];

export const getByID = ({ teamId }) => {
    const team = teams.filter(t => t.id === teamId);
    try {
        return team[0];
    } catch (e) {
        console.log('no team with this id');
    }
};

export const getTeamsByCurrentUser = () => {
    const currentUser = getCurrentUser();

    return teams.filter(team => currentUser.teamIDList.includes(team.id));
};

export const getUsers = ({ teamID }) => {
    // return two arrays. One of users on the team specified, and one of users not on the team specified
    const users = getList();

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

export const addTeamToList = ({ teamName, managerID }) => {
    const newTeam = {
        id: numTeams + 1,
        name: teamName,
        managerID: managerID
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
