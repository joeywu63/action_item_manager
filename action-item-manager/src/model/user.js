const users = [
    {
        id: 0,
        customerID: 1,
        firstName: 'admin',
        lastName: '',
        email: 'admin',
        password: 'admin',
        teamIDList: [1],
        role: 1,
        dateLastLoggedIn: '2019-01-01'
    },
    {
        id: 1,
        customerID: 1,
        firstName: 'Lucas',
        lastName: 'G',
        email: 'lucas.g@gmail.com',
        password: 'admin',
        teamIDList: [1, 2],
        role: 0,
        dateLastLoggedIn: '2019-01-01'
    },
    {
        id: 2,
        customerID: 1,
        firstName: 'Joey',
        lastName: 'W',
        email: 'joey.w@gmail.com',
        password: 'admin',
        teamIDList: [1, 2],
        role: 0,
        dateLastLoggedIn: '2019-01-01'
    },
    {
        id: 3,
        customerID: 1,
        firstName: 'Alex',
        lastName: 'E',
        email: 'alex.e@gmail.com',
        password: 'admin',
        teamIDList: [2],
        role: 0,
        dateLastLoggedIn: '2019-01-01'
    },
    {
        id: 4,
        customerID: 1,
        firstName: 'Sandro',
        lastName: 'S',
        email: 'snadro.s@gmail.com',
        password: 'admin',
        teamIDList: [2],
        role: 0,
        dateLastLoggedIn: '2019-01-01'
    }
];

export const isUser = ({ email, password }) => {
    let user;
    users.forEach(registeredUser => {
        if (
            email === registeredUser.email &&
            password === registeredUser.password
        ) {
            user = registeredUser;
        }
    });
    return user;
};

export const getByCustomer = ({ customerID }) => {
    return users.filter(user => user.customerID === customerID);
};

export const getByID = ({ userID }) => {
    return users.find(user => user.id === userID);
};

export const addToTeam = ({ userID, teamID }) => {
    users.forEach(user => {
        if (user.id === userID) {
            user.teamIDList.push(teamID);
        }
    });
};

export const removeFromTeam = ({ userID, teamID }) => {
    users.forEach(user => {
        if (user.id === userID) {
            const index = user.teamIDList.indexOf(teamID);
            user.teamIDList.splice(index, 1);
        }
    });
};
