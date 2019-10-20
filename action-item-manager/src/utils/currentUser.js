import { ROLES } from 'utils/constants';

let currentUser = {
    id: 1,
    customerID: 1,
    email: 'lucas.g@gmail.com',
    firsName: 'Lucas',
    lastName: 'G',
    teamIDList: [1, 2],
    role: 0,
    dateLastLoggedIn: '2019-01-01'
};

export const setCurrentUser = (userData) => {
    currentUser = userData;
}

export const getIsAdmin = () => currentUser.role === ROLES.admin;

export const getCurrentUser = () => currentUser;

export const hasAccess = role => currentUser.role >= role;

export const canManageTeam = managerID =>
    managerID === currentUser.id || currentUser.role === ROLES.admin;
