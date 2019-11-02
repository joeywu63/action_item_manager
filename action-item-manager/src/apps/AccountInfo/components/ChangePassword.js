import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';
import { getCurrentUser } from 'utils/currentUser';
import { submitPassword } from '../repository';
import Input from 'common/Input';
import Label from 'common/Label';
import SubmitButton from 'common/SubmitButton';

const StyledButton = styled(Button)`
    margin-top: 10px;
    margin-left: 10px;
`;

class ChangePassword extends React.Component {
    state = {
        password: '',
        userID: getCurrentUser().id
    };

    handleSubmit = () => {
        const { userID, password } = this.state;
        const { handleSwitchPage } = this.props;

        submitPassword({ userID, password });
        handleSwitchPage(ACCTPAGES.default);
    };

    handleChange = event => {
        this.setState({ password: event.target.value });
    };

    render() {
        const { handleSwitchPage } = this.props;
        const { password } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Label label="New Password:">
                        <Input
                            type="text"
                            value={password}
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

ChangePassword.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangePassword;
