import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';
import { getCurrentUser } from 'utils/currentUser';
import { submitInfo } from '../repository';

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
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={email}
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

ChangeInfo.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
};

export default ChangeInfo;
