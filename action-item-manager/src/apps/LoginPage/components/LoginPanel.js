import React from 'react';
import Panel from 'common/Panel';
import styled from 'styled-components';
import Button from 'common/Button';

import { COLOURS } from 'utils/constants';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
        to bottom right,
        ${COLOURS.darkPrimary},
        #bcb8b1,
        #834a75
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLOURS.darkPrimary};
`;

const Login = styled.input`
    color: ${COLOURS.darkPrimary};
    background-color: ${COLOURS.lightPrimary};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
    width: 300px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    margin-bottom: 1.2em;
`;

const LoginButton = styled(Button)`
    width: 320px;
    font-weight: 500;
    text-align: center;
    font-size: 20px;
    color: ${COLOURS.darkSecondary};
    background-color: #f87080;
    border: none;
    border-radius: 8px;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    :hover {
        background-color: ${COLOURS.lightSecondary};
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
        transform: translateY(-5px);
        position: relative;
        z-index: 1;
    }
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Title = styled.h1`
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
    font-weight: 700;
    font-size: 45px;
    color: ${COLOURS.lightPrimary};
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 0.1em;
    margin-top: 0.2em;
`;

const Subtitle = styled.h3`
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
    font-weight: 500;
    color: ${COLOURS.lightSecondary};
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 2.4em;
    margin-top: 0.2em;
`;

const StyledPanel = styled(Panel)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLOURS.darkPrimary};
    border-radius: 6px;
    width: 600px;
    box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);
    height: 350px;
    border: 1px none;
    margin: 25vh;
`;

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleLogin = () => {
        this.props.onClick(this.state);
    };

    handleChange = event => {
        const inputType = event.target.name;
        if (inputType === 'email') {
            this.setState({ email: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    };

    render() {
        return (
            <LoginWrapper>
                <StyledPanel>
                    <form>
                        <FormContainer>
                            <Title>Welcome.</Title>
                            <Subtitle>Please sign in to continue</Subtitle>
                            <div>
                                <Login
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <Login
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </FormContainer>
                        <LoginButton
                            text="LOGIN"
                            className={LoginButton}
                            onClick={this.handleLogin}
                        />
                    </form>
                </StyledPanel>
            </LoginWrapper>
        );
    }
}

export default LoginPanel;
