import { ROLES } from 'utils/constants';

const currentUser = {
    id: 1,
    customerID: 1,
    email: 'lucas.m.gismondi@gmail.com',
    firsName: 'Lucas',
    lastName: 'Gismondi',
    teamIDList: [1, 2],
    role: 0,
    dateLastLoggedIn: '2019-01-01 00:00:00'
};

export const getCurrentUser = () => currentUser;

export const hasAccess = role => currentUser.role >= role;

export const canManageTeam = managerID =>
    managerID === currentUser.id || currentUser.role === ROLES.admin;
