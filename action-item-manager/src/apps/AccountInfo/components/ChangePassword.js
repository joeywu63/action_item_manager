import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';
import AccountInfo from './AccountInfo';

class ChangePassword extends React.Component {
    state = {
        value: ''
    };

    renderChangePasswordButtons = () => {
        const { handleSwitchPage } = this.props;

        return (
            <>
                <Button
                    text="Submit"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
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
                        <input type="text" value={this.state.value} />
                    </label>
                </form>

                {this.renderChangePasswordButtons()}

                {page === ACCTPAGES.default ? <AccountInfo /> : null}
            </>
        );
    }
}

ChangePassword.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangePassword;
