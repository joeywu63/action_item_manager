import { ROLES } from 'utils/constants';

let currentUser = null;

export const setCurrentUser = userData => {
    currentUser = userData;
};

export const getIsAdmin = () => currentUser.role === ROLES.admin;

export const getCurrentUser = () => currentUser;

export const hasAccess = role => currentUser.role >= role;

export const canManageTeam = managerID =>
    managerID === currentUser.id || currentUser.role === ROLES.admin;
