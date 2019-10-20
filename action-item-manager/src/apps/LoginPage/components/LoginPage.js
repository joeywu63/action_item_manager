import React from 'react';
import LoginPanel from 'apps/LoginPage/components/LoginPanel';
import styled from 'styled-components';
import {isUser} from 'model/user';
import {setCurrentUser} from 'utils/currentUser';


const PanelWrapper = styled.div`

`;

class LoginPage extends React.Component {

    handleLogin = (loginData) => {
        // Check if user is registered
        const userData = isUser(loginData);
        if (userData) {
            setCurrentUser(userData);
            this.props.history.push('/dashboard');
        }
        // Error message if not registered
        else {
            // TODO: Better error message mechanism
            alert("Wrong credentials. Try again");
        }
    } 

    render() {
        return (
            <PanelWrapper>
                <LoginPanel onClick={this.handleLogin}></LoginPanel>
            </PanelWrapper>
        )
    }
}

export default LoginPage;