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
                    <label>
                        New Password:
                        <input
                            type="text"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Button
                    text="Cancel"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
                />
            </>
        );
    }
}

ChangePassword.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangePassword;
