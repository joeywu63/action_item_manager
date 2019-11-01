import React from 'react';
import Panel from 'common/Panel';
import styled from 'styled-components';
import Button from 'common/Button';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const Login = styled.input`
    color: #384047;
    background-color: #e8eeef;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-bottom: 1.2em;
`;

const LoginButton = styled(Button)`
    width: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 19px;
    color: #fff;
    background-color: #4bc970;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    :hover {
        background-color: #35A556;
        box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
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

const Title = styled.h2`
    font-weight: 700;
    color: #384047;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 1.2em;
    margin-top: 0.2em;
`;

const StyledPanel = styled(Panel)`
    background-color: #fff;
    border-radius: 6px;
    max-width: 400px;
    box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);
    max-height: 400px;
    border: 1px none;
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
            <StyledPanel>
                <form>
                    <FormContainer>
                        <Title>Please Log in</Title>
                        <div>
                            <Login
                                type="text"
                                name="email"
                                placeholder="email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Login
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={this.handleChange}
                            />
                        </div>
                    </FormContainer>
                    <LoginButton
                        text="Log in"
                        className={LoginButton}
                        onClick={this.handleLogin}
                    />
                </form>
            </StyledPanel>
        );
    }
}

export default LoginPanel;
