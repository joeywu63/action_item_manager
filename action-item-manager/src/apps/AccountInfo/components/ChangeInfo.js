import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ACCTPAGES } from '../constants';
import { getCurrentUser } from 'utils/currentUser';
import { submitInfo } from '../repository';
import Input from 'common/Input';
import Label from 'common/Label';
import Button from 'common/Button';
import SubmitButton from 'common/SubmitButton';

const StyledButton = styled(Button)`
    margin-top: 10px;
    margin-left: 10px;
`;

class ChangeInfo extends React.Component {
    componentDidMount() {
        const { firstName, lastName, email } = this.props.currentUser;

        this.setState({ firstName, lastName, email });
    }

    state = {
        firstName: '',
        lastName: '',
        email: '',
        userID: getCurrentUser().id
    };

    handleSubmit = () => {
        const { firstName, lastName, email, userID } = this.state;
        const { handleSwitchPage } = this.props;

        submitInfo({ userID, firstName, lastName, email });
        handleSwitchPage(ACCTPAGES.default);
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({
            [key]: e.target.value
        });
    };

    render() {
        const { handleSwitchPage } = this.props;
        const { firstName, lastName, email } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Label>
                        <Input
                            label="First Name:"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        <Input
                            label="Last Name:"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <Label>
                        <Input
                            label="Email:"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Label>
                    <SubmitButton value="Submit" />
                    <StyledButton
                    text="Cancel"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
                    />
                </form>
            </>
        );
    }
}

ChangeInfo.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
};

export default ChangeInfo;
