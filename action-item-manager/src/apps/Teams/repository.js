export const getTeams = () => {
    return [
        {
            teamID: 1,
            name: 'Engineering',
            managerID: 1,
            customerID: 1,
            userIDList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            teamID: 2,
            name: 'Some Sub Team',
            managerID: 2,
            customerID: 1,
            userIDList: [1, 2, 3]
        }
    ];
};

export const getTeamActionItems = ({ teamID }) => {
    const teamActionItems = {
        1: [
            {
                actionItemID: 1,
                title: 'Some Title for Some Action Item',
                description:
                    'The following are the steps to do something: 1. turn off your computer, 2. go home'
            }
        ],
        2: [
            {
                actionItemID: 2,
                title: 'Some Other Title for Some Other Action Item',
                description:
                    'Some other description to complete some task you probably dont want to do'
            }
        ]
    };

    return teamActionItems[teamID];
};

export const assignActionItem = ({ teamID, title, description, dueDate }) => {
    console.log('assigning action item');
};

export const getUsersNotOnTeam = ({ teamID }) => {
    return [
        {
            id: 1,
            customerID: 1,
            firstName: 'Lucas',
            lastName: 'G',
            email: 'lucas.g@gmail.com'
        },
        {
            id: 2,
            customerID: 1,
            firstName: 'Joey',
            lastName: 'W',
            email: 'joey.w@gmail.com'
        },
        {
            id: 3,
            customerID: 1,
            firstName: 'Alex',
            lastName: 'E',
            email: 'alex.e@gmail.com'
        },
        {
            id: 4,
            customerID: 1,
            firstName: 'Sandro',
            lastName: 'S',
            email: 'snadro.s@gmail.com'
        }
    ];
};

export const getTeamUsers = ({ teamID }) => {
    return [
        {
            id: 1,
            customerID: 1,
            firstName: 'Lucas',
            lastName: 'G',
            email: 'lucas.g@gmail.com'
        },
        {
            id: 2,
            customerID: 1,
            firstName: 'Joey',
            lastName: 'W',
            email: 'joey.w@gmail.com'
        }
    ];
};
