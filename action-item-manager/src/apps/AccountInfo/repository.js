import * as user from 'model/user';
import changeInfo from './components/ChangeInfo';

export const submitPassword = ({userID, password}) => {
    user.changePassword({userID, password});
};

export const submitInfo = ({userID, firstName, lastName, email}) => {
    user.changeInfo({userID, firstName, lastName, email});
};
