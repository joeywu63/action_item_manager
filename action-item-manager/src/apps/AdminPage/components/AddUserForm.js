import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'common/Dropdown';
import Input from 'common/Input';
import SubmitButton from 'common/SubmitButton';
import Label from 'common/Label';

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
                <Label label="Role">
                    <Dropdown
                        placeholder="select role"
                        value={role}
                        onChange={this.handleRoleChange}
                        options={[
                            { value: 0, label: 'User' },
                            { value: 1, label: 'Admin' }
                        ]}
                    />
                </Label>
                <Input
                    label="Email"
                    type="text"
                    value={email}
                    name="email"
                    handleChange={this.handleChange}
                />
                <Input
                    label="First Name"
                    type="text"
                    value={firstName}
                    name="firstName"
                    handleChange={this.handleChange}
                />
                <Input
                    label="Last Name"
                    type="text"
                    value={lastName}
                    name="lastName"
                    handleChange={this.handleChange}
                />
                <SubmitButton value="Invite User" />
            </form>
        );
    }
}

AddUserForm.propTypes = {
    handleCreateUser: PropTypes.func.isRequired
};

export default AddUserForm;
