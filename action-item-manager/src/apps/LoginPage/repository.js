import * as user from 'model/user';
import axios from 'axios';

export const isUser = user.isUser;

export const login = ({ email, password }) =>
    axios
        .post('/user/login', { email, password })
        .then(response => console.log(response))
        .catch(error => console.log(error));


export const createUser = ({ email, firstName, lastName, password }) =>
    axios
        .post('/user/create', { email, firstName, lastName, password })
        .then(response => console.log(response))
        .catch(error => console.log(error));
