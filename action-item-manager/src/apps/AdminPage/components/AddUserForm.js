import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'common/Dropdown';

class AddUserForm extends React.Component {
    componentDidMount() {}

    state = {
        email: '',
        firstName: '',
        lastName: '',
        role: { value: 0, label: 'User' }
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({
            [key]: e.target.value
        });
    };

    handleRoleChange = role => {
        this.setState({ role });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { handleCreateUser } = this.props;
        const { email, firstName, lastName, role } = this.state;

        handleCreateUser(email, firstName, lastName, role.value);
        this.setState({ email: '', firstName: '', lastName: '' });
    };

    render() {
        const { email, firstName, lastName, role } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="new team name"
                    />
                </label>
                <label>
                    First Name:
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="first name"
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="last name"
                    />
                </label>
                <label>
                    Role:
                    <Dropdown
                        placeholder="select role"
                        value={role}
                        onChange={this.handleRoleChange}
                        options={[
                            { value: 0, label: 'User' },
                            { value: 1, label: 'Admin' }
                        ]}
                    />
                </label>
                <input type="submit" value="Invite User" />
            </form>
        );
    }
}

AddUserForm.propTypes = {
    handleCreateUser: PropTypes.func.isRequired
};

export default AddUserForm;
