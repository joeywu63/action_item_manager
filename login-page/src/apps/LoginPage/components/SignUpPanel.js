import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { createUser } from '../repository';

import { COLOURS } from 'utils/constants';

const SignUpContainer = styled.div`
    border: 45px solid ${COLOURS.darkSecondary};
    align-items: center;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 350px;
    background-color: ${COLOURS.darkSecondary};
`;

const SignUpInfo = styled.input`
    color: ${COLOURS.darkPrimary};
    background-color: ${COLOURS.lightPrimary};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
    width: 180px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    margin-bottom: 1.2em;
`;

const SignUpButton = styled.input`
    width: 200px;
    font-weight: 500;
    text-align: center;
    font-size: 16px;
    color: ${COLOURS.darkSecondary};
    background-color: ${COLOURS.background};
    border: none;
    border-radius: 8px;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1.6em;
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
    font-weight: 500;
    font-size: 24px;
    color: white;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 0.1em;
    margin-top: 0.2em;
`;

const Subtitle = styled.h3`
    font-weight: 300;
    color: white;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 2.4em;
    margin-top: 0.2em;
`;

class SignUpPanel extends React.Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({
            [key]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { email, firstName, lastName, password } = this.state;

        await createUser({ email, firstName, lastName, password });
    };

    render() {
        const { email, firstName, lastName, password } = this.state;

        return (
            <SignUpContainer>
                <FormContainer onSubmit={this.handleSubmit}>
                    <Title>New User?</Title>
                    <Subtitle>Sign up to get started</Subtitle>
                    <SignUpInfo
                        name="email"
                        type="text"
                        placeholder="Username"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <SignUpInfo
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <SignUpInfo
                        name="lastName"
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <SignUpInfo
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <SignUpButton type="submit" value="Sign Up" />
                </FormContainer>
            </SignUpContainer>
        );
    }
}

export default SignUpPanel;
