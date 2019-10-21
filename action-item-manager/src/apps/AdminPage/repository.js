// ignore these

export const addUserToList = ({userID, customerID, firstName, lastName, email}) => {
    const newUser = {
        id: userID,
        customerID: customerID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: 'user',
        teamIDList: [],
        role: 0,
        dateLastLoggedIn: '2019-01-01'
    };
    users.push(newUser)
};

export const removeUserFromList = ({ userID }) => {
    for (let i = users.length - 1; i >= 0; i--){
        if (users[i].id === userID){
            users.splice(i, 1);
        }
    }
}

export const getUserList = () => { return users };
