import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';
import { getCurrentUser } from 'utils/currentUser';
import { submitPassword, submitInfo } from '../repository';

class ChangeInfo extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        userID: getCurrentUser().id
    };

    handleSubmit = () => {
        const { firstName, lastName, email, userID } = this.state;
        const { handleSwitchPage } = this.props;
        submitInfo({userID, firstName, lastName, email});
        handleSwitchPage(ACCTPAGES.default);
    };

    handleChange = event => {
        const inputType = event.target.name;
        if (inputType === 'firstName') {
            this.setState({ firstName: event.target.value });
        } else if (inputType === 'lastName') {
            this.setState({ lastName: event.target.value });
        } else {
            this.setState({ email: event.target.value });
        }
    };
    
    renderChangeInfoButtons = () => {
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
        return (
            <>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName" firstName={this.state.firstName} onChange={this.handleChange} />
                    </label>
                </form>
                <form>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" lastName={this.state.lastName} onChange={this.handleChange} />
                    </label>
                </form>
                <form>
                    <label>
                        Email:
                        <input type="text" name="email" email={this.state.email} onChange={this.handleChange} />
                    </label>
                </form>

                {this.renderChangeInfoButtons()}
            </>
        );
    }
}

ChangeInfo.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangeInfo;
