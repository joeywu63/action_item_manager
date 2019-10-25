import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoginPanel from 'apps/LoginPage/components/LoginPanel';

import { isUser } from 'model/user'; // TODO: move to repository
import { setCurrentUser } from 'utils/currentUser';

const PanelWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

class LoginPage extends React.Component {
    handleLogin = loginData => {
        const { login } = this.props;

        const userData = isUser(loginData);
        if (userData) {
            setCurrentUser(userData);
            login();
        } else {
            // TODO: Better error message mechanism
            alert('Wrong credentials. Try again');
        }
    };

    render() {
        return (
            <PanelWrapper>
                <LoginPanel onClick={this.handleLogin} />
            </PanelWrapper>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginPage;
