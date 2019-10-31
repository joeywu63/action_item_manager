import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';
import { getCurrentUser } from 'utils/currentUser';
import { submitPassword } from '../repository';


class ChangePassword extends React.Component {
    state = {
        password: '',
        userID: getCurrentUser().id
    };

    handleSubmit = () => {
        const { userID, password } = this.state;
        const { handleSwitchPage } = this.props;
        submitPassword({userID, password});
        handleSwitchPage(ACCTPAGES.default);
    };

    handleChange = event => {
        this.setState({ password: event.target.value });
    };

    renderChangePasswordButtons = () => {
        const { handleSwitchPage } = this.props;

        return (
            <>
                <Button
                    text="Submit"
                    onClick={() => this.handleSubmit()}
                />
                <Button
                    text="Cancel"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
                />
            </>
        );
    };

    render() {
        const { page } = this.state;

        return (
            <>
                <form>
                    <label>
                        New Password:
                        <input type="text" password={this.state.password} onChange={this.handleChange}/>
                    </label>
                </form>

                {this.renderChangePasswordButtons()}
            </>
        );
    }
}

ChangePassword.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangePassword;
